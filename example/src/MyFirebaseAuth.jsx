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

function useBooleanQueryParam(key) {
    const currentValue = getQueryParam(key) === "1";
    const toggle = () => {
        const newValue = currentValue ? "0" : "1";
        updateQueryParamAndRefresh(key, newValue);
    }
    return [ currentValue, toggle ]
}

function Checkbox({ trueLabel, falseLabel, value, onToggle }) {
    if (value) {
        trueLabel = <b>{trueLabel}</b>
    } else if (falseLabel) {
        falseLabel = <b>{falseLabel}</b>
    }
    let label = <React.Fragment>{trueLabel} ?</React.Fragment>
    if (falseLabel) {
        label = <React.Fragment>{trueLabel} ? (otherwise {falseLabel}) </React.Fragment>
    }
    return <div>
        <label>
            <input type='checkbox' checked={value} onChange={() => {
                onToggle()
            }}/>
            {label}
        </label>
    </div>
}

function getAuthComponent(shouldLoadViaIndex, shouldUseStyledComponent) {
    if (shouldLoadViaIndex) {
        const lib = require('react-firebaseui');
        if (shouldUseStyledComponent) {
            return lib.StyledFirebaseAuth;
        } else {
            return lib.FirebaseAuth;
        }
    } else {
        if (shouldUseStyledComponent) {
            const StyledFirebaseAuth = require('react-firebaseui/StyledFirebaseAuth').default;
            return StyledFirebaseAuth;
        } else {
            const FirebaseAuth = require('react-firebaseui/FirebaseAuth').default;
            return FirebaseAuth;
        }
    }
}

export default function MyFirebaseAuth(props) {
    const [ shouldRender, setShouldRender ] = useState(true);
    const [ shouldLoadViaIndex, setShouldLoadViaIndex  ] = useState(false);
    const [ shouldUseStyledComponent, toggleUseStyledComponent ] = useBooleanQueryParam("styled");

    let authUI = <span>Auth UI not being rendered</span>;
    if (shouldRender) {
        const AuthComponent = getAuthComponent(setShouldLoadViaIndex, shouldUseStyledComponent);
        authUI = <AuthComponent {...props}/>
    }

    return <div>
        <code>{JSON.stringify({ shouldRender, shouldLoadViaIndex, shouldUseStyledComponent }, null, 2)}</code>
        <Checkbox 
            trueLabel="should render auth UI"
            value={shouldRender}
            onToggle={() => { setShouldRender(v => !v) }}
        />
        <Checkbox 
            trueLabel="load via index.js"
            falseLabel="[component].js"
            value={shouldLoadViaIndex}
            onToggle={() => { setShouldLoadViaIndex(v => !v) }}
        />
        <Checkbox 
            trueLabel="use StyledFirebaseAuth"
            falseLabel="FirebaseAuth"
            value={shouldUseStyledComponent}
            onToggle={toggleUseStyledComponent}
        />
        {authUI}
    </div>
}
