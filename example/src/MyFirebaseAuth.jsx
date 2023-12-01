import React, { useState } from 'react';
import withProxy from './pui-hoc';

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

function getUpdatedQueryParams(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    return urlParams;
}

function updateQueryParamAndRefresh(key, value) {
    const urlParams = getUpdatedQueryParams(key, value);
    window.location.search = urlParams;
}

function updateUrlWithoutReload(key, valueBool) {
    const value = valueBool ? "1" : "0";
    if (getQueryParam(key) === value) {
        // already in the correct url state
        // pushState not required
        return;
    }
    const newState = _objectWithoutProperties(window.history.state || {}, []);
    newState[key] = value;
    const newUrl = "?" + getUpdatedQueryParams(key, value).toString();
    window.history.pushState(newState, window.document.title, newUrl);
}

function useBooleanQueryParamWithReload(key) {
    const currentValue = getQueryParam(key) === "1";
    updateUrlWithoutReload(key, currentValue);

    const toggle = () => {
        const newValue = currentValue ? "0" : "1";
        updateQueryParamAndRefresh(key, newValue);
    }
    return [ currentValue, toggle ]
}

function useBooleanQueryParamWithoutReload(key) {
    const [ valueBool, setValue ] = useState(getQueryParam(key) === "1");
    updateUrlWithoutReload(key, valueBool);

    const toggle = () => {
        setValue(v => !v);
    }
    return [ valueBool, toggle ];
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

function getAuthComponent(shouldLoadViaRequire, shouldLoadViaIndex, shouldUseStyledComponent) {
    return withProxy(shouldLoadViaRequire, shouldLoadViaIndex, shouldUseStyledComponent);
}

export default function MyFirebaseAuth(props) {
    const [ noRender, toggleRender ] = useBooleanQueryParamWithoutReload("norender");
    const [ shouldLoadViaRequire, toggleLoadViaRequire ] = useBooleanQueryParamWithoutReload("require");
    const [ shouldLoadViaIndex, toggleLoadViaIndex ] = useBooleanQueryParamWithoutReload("index");
    const [ shouldUseStyledComponent, toggleUseStyledComponent ] = useBooleanQueryParamWithReload("styled");

    const shouldRender = !noRender;

    let authUI = <span>Auth UI not being rendered</span>;
    if (shouldRender) {
        const AuthComponent = getAuthComponent(shouldLoadViaRequire, shouldLoadViaIndex, shouldUseStyledComponent);
        authUI = <AuthComponent {...props}/>
    }

    return <div>
        <code>{JSON.stringify({ shouldRender, shouldLoadViaRequire, shouldLoadViaIndex, shouldUseStyledComponent }, null, 2)}</code>
        <Checkbox 
            trueLabel="should render auth UI"
            value={shouldRender}
            onToggle={toggleRender}
        />
        <Checkbox 
            trueLabel="use require"
            falseLabel={"import"}
            value={shouldLoadViaRequire}
            onToggle={toggleLoadViaRequire}
        />
        <Checkbox 
            trueLabel="load via index.js"
            falseLabel="[component].js"
            value={shouldLoadViaIndex}
            onToggle={toggleLoadViaIndex}
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
