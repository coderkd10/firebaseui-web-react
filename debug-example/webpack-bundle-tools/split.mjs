import * as acorn from 'acorn';
import { argv, exit } from 'node:process';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT_ROOT_DIR = 'out';
const OUT_MODULES_DIR = path.join(OUT_ROOT_DIR, 'modules');
const OUT_LOADER_CODE = path.join(OUT_ROOT_DIR, 'loader.js');
const OUT_MODULES_INFO = path.join(OUT_ROOT_DIR, 'modules.json');

async function main() {
    if (argv.length < 3) {
        console.error("Usage: ./split <filename>");
        exit(1);
    }
    
    const inputFilename = argv[2];
    try {
        await mkdir(OUT_MODULES_DIR, { recursive: true });
    } catch (err) {
        console.log('unable to create output directory - ', err);
        exit(1);
    }
    
    let bundleCode;
    try {
        const data = await readFile(inputFilename, 'utf-8');
        bundleCode = data;
    } catch (err) {
        console.error("unable to read file. ", err);
        exit(1);
    }

    let didParse = false;
    try {
        didParse = await splitBundle(inputFilename, bundleCode);
    } catch (err) {
        console.error('unexpected err: ', err);
        await logModulesJSON({
            'success': false,
            'bundle': inputFilename
        })
        exit(1);
    }
    console.log(didParse);
}

/**
 * split a (old-format) webpack bundle
 * @param {string} inputFilename - input filename (just used for logging)
 * @param {string} bundleCode - input budle
 * @returns {Promise<boolean>} if spliting was successful
 */
async function splitBundle(inputFilename, bundleCode) {
    const parserOptions = {
        ecmaVersion: 2020,
    };
    const ast = acorn.parse(bundleCode, parserOptions);

    // scrappy for now
    if (ast.body.length !== 1) return false;
    
    const n1 = ast.body[0];
    if (n1.type !== 'ExpressionStatement') return false;

    const n2 = n1.expression;
    if (n2.type !== 'CallExpression') return false;

    const n3 = n2.callee;
    if (n3.type !== 'FunctionExpression') return false;

    let loaderFunctionCode = bundleCode.substring(n3.start, n3.end);
    loaderFunctionCode = '(' + loaderFunctionCode + ')';

    await writeFile(OUT_LOADER_CODE, loaderFunctionCode);

    if (n2.arguments.length !== 1) return false;
    
    const n4 = n2.arguments[0];
    if (n4.type !== 'ObjectExpression') return false;
    
    /**
     * @type {{moduleName: string, fileName: string}[]};
     */
    const moduleNamesMap = [];

    for (let p of n4.properties) {
        if (p.type !== 'Property') return false;
        const nameNode = p.key;
        if (nameNode.type !== 'Literal') return false;
        const moduleName = nameNode.value;
        const fileName = moduleNameToFileName(moduleName);
        moduleNamesMap.push({
            moduleName, fileName
        });
        const codeNode = p.value;
        if (codeNode.type !== 'FunctionExpression') return false;

        let moduleCode = bundleCode.substring(codeNode.start, codeNode.end);
        moduleCode = '(' + moduleCode + ')';

        const filePath = path.join(OUT_MODULES_DIR, fileName);
        await writeFile(filePath, moduleCode);
    }

    await logModulesJSON({
        'success': true,
        'bundle': inputFilename,
        'modules': moduleNamesMap
    });

    return true;
}

/**
 * converts a modulename name to a filename
 * @param {string} moduleName 
 * @returns {string}
 */
function moduleNameToFileName(moduleName) {
    return 'f' + moduleName.replaceAll('/', '__') + '__.js';
}

async function logModulesJSON(modulesJSON) {
    try{
        await writeFile(OUT_MODULES_INFO, JSON.stringify(modulesJSON, null, 2));
    } catch (err) {
        console.error("unable to write modules info - ", err);
    }
}

main();
