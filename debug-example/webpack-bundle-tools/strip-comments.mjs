import stripComments from 'strip-comments';

import { argv, exit } from 'node:process';
import { fstat, readFile, writeFile } from 'node:fs';

function main() {
    if (argv.length < 3) {
        console.error("Usage: ./strip <filename>");
        exit(1);
    }
    
    const inputFilename = argv[2];
    readFile(inputFilename, 'utf8', (err, data) => {
        if (err) {
            console.error("unable to read file. ", err);
            exit(1);
        }
        const withoutComments = stripComments(data);
        writeFile(inputFilename, withoutComments, (err) => {
            if (err) {
                console.error("unable to write file. ", err);
                exit(1);
            }
        })
    });
}

main();
