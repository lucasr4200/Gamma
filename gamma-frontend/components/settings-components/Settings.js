import * as React from "react";
import {CssVarsProvider} from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

import Header from "./Header";
import MyProfile from "./SettingsPage";
export default function Settings() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{display: "flex", minHeight: "100dvh"}}>
                <Header />
                <Box component="main" className="MainContent" sx={{}}>
                    <MyProfile />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}
