import React from "react";
import {CssVarsProvider, Box, CssBaseline} from "@mui/joy";
export default function AppWrapper({children}) {
    return (
        <>
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                
                    {children}
                
            </CssVarsProvider>
        </>
    );
}
