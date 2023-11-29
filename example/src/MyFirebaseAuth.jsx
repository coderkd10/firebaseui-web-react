import React, { useState } from 'react';

function MyFbAuthProxy(props) {
    if (!props.useStyled) {
        const FirebaseAuth = require('react-firebaseui/FirebaseAuth').default;
        return <div>
            <span>{"{rendered uncompiled verion ...}"}</span>
            <FirebaseAuth />
        </div>
    }
    const StyledFirebaseAuth = require('react-firebaseui/StyledFirebaseAuth').default;
    return <div>
        <span>{"{rendered webpack compiled verion ...}"}</span>
        <StyledFirebaseAuth />
    </div>
}

export default function MyFirebaseAuth(props) {
    const [ checked, setChecked ] = useState(false);

    return <div>
        <label>
            <input type='checkbox' checked={checked} onChange={() => {
                setChecked(value => !value);
            }}/>
            Use Styled (webpacked compiled with inline styles) Component ?
        </label>
        <MyFbAuthProxy useStyled={checked} />
    </div>
}
