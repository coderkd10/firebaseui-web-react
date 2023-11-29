import React, { useState } from 'react';

function _objectWithoutProperties(srcObj, excluded) {
    // hack since we don't have object rest spread
    // adapted from @babel/plugin-transform-object-rest-spread
    const out = {};
    for (let key of Object.keys(srcObj)) {
        if (excluded.indexOf(key) === -1) {
            out[key] = srcObj[key];
        }
    }
    return out;
}

function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

function updateQueryParamAndRefresh(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams;
}

function MyFbAuthProxy(props) {
    // for some reason this syntax isn't working!
    // const { useStyled, ...downstreamProps } = props;

    const useStyled = props.useStyled;
    const downstreamProps = _objectWithoutProperties(props, ['useStyled']);

    if (useStyled) {
        const FirebaseAuth = require('react-firebaseui/FirebaseAuth').default;
        return <div>
            <span>{"{rendered uncompiled verion ...}"}</span>
            <FirebaseAuth {...downstreamProps} />
        </div>
    }
    const StyledFirebaseAuth = require('react-firebaseui/StyledFirebaseAuth').default;
    return <div>
        <span>{"{rendered webpack compiled verion ...}"}</span>
        <StyledFirebaseAuth {...downstreamProps} />
    </div>
}

export default function MyFirebaseAuth(props) {
    const isStyled = getQueryParam("styled") === "1";

    return <div>
        <label>
            <input type='checkbox' checked={isStyled} onChange={() => {
                updateQueryParamAndRefresh("styled", isStyled ? "0" : "1");
            }}/>
            Use Styled (webpacked compiled with inline styles) Component ?
        </label>
        <MyFbAuthProxy useStyled={isStyled} {...props} />
    </div>
}
