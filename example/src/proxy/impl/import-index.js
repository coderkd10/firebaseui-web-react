import { FirebaseAuth, StyledFirebaseAuth } from "react-firebaseui"; 

export function proxy(useStyled) {
    if (useStyled) {
        return StyledFirebaseAuth;
    } else {
        return FirebaseAuth;
    }
}
