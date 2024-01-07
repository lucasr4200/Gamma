import React from "react";
import {CssVarsProvider, Box, CssBaseline} from "@mui/joy";

import {
    experimental_extendTheme as materialExtendTheme,
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

const materialTheme = materialExtendTheme();
export default function AppWrapper({children}) {
    return (
        <>
            <MaterialCssVarsProvider
                theme={{[MATERIAL_THEME_ID]: materialTheme}}
            >
                <CssVarsProvider disableTransitionOnChange>
                    <CssBaseline />

                    {children}
                </CssVarsProvider>
            </MaterialCssVarsProvider>
        </>
    );
}
