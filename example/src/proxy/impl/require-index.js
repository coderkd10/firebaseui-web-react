export function proxy(useStyled) {
    const lib = require('react-firebaseui');
    if (useStyled) {
        return lib.StyledFirebaseAuth;
    } else {
        return lib.FirebaseAuth;
    }
}
