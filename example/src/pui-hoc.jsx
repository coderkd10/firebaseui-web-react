import React, { useState, useEffect } from 'react';
import { proxy } from './proxy';

export default function withProxy(useRequire, useIndex, useStyled) {
    let ProxyComponent;
    const loadingSuccesPromise = proxy(useRequire, useIndex, useStyled)
        .then(Component => {
            console.log("==> loaded proxy component = ", { Component });

            ProxyComponent = Component;
            return true;
        })
        .catch(err => {
            console.error("unable to load proxy component: ", err);
            return false;
        })

    const ProxyUI = (props) => {
        const [ loading, setLoading ] = useState(true);
        const [ loadingSuccess, setLoadingSuccess ] = useState(false);

        useEffect(() => {
            loadingSuccesPromise.then(success => {
                setLoading(false);
                setLoadingSuccess(success);
            });
        }, []);

        if (loading) {
            return <h4>ProxyUI: loading = true</h4>;
        }
        if (!loadingSuccess) {
            return <h4>ProxyUI: loading failed!</h4>;
        }
        return <ProxyComponent {...props} />
    }
    return ProxyUI;
}
