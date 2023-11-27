import d14 from 'tmp-abhishek-debug/dm14/StyledFirebaseAuth';
import d16 from 'tmp-abhishek-debug/dm16/StyledFirebaseAuth';
import d18 from 'tmp-abhishek-debug/dm18/StyledFirebaseAuth';
import d18_webpack from 'tmp-abhishek-debug/dm18_webpack4/StyledFirebaseAuth';
import d18_nonjsx from 'tmp-abhishek-debug/dm18_nonjsx/StyledFirebaseAuth';

import dd18_wp5_njx from 'tmp-abhishek-debug/dd18_wp5_njx/StyledFirebaseAuth';
import dd18_wp5_njx_nolibname from 'tmp-abhishek-debug/dd18_wp5_njx_nolibname/StyledFirebaseAuth';
import dd18_wp5_jsx_nolibname from 'tmp-abhishek-debug/dd18_wp5_jsx_nolibname/StyledFirebaseAuth';


const debugObj = {
    d14, d16, d18,
    d18_webpack,
    d18_nonjsx,
    dd18_wp5_njx,
    dd18_wp5_njx_nolibname,
    dd18_wp5_jsx_nolibname,
};

export default function doDebug() {
    window.D1 = debugObj;
    console.log("===> debug objects loaded - ", { debugObj });
}
