export async function proxy(useRequire, useIndex, useStyled) {
    if (!useRequire) {
        if (useIndex) {
            const inner = await import("./impl/import-index");
            return inner.proxy(useStyled);
        } else if (useStyled) {
            const inner = await import("./impl/import-noindex-StyledFirebaseAuth");
            return inner.proxy();
        } else {
            const inner = await import("./impl/import-noindex-FirebaseAuth");
            return inner.proxy();
        }
    } else {
        if (useIndex) {
            const inner = await import("./impl/require-index");
            return inner.proxy(useStyled);
        } else if (useStyled) {
            const inner = await import("./impl/require-noindex-StyledFirebaseAuth");
            return inner.proxy();
        } else {
            const inner = await import("./impl/require-noindex-FirebaseAuth");
            return inner.proxy();
        }
    }
}
