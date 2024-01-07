import React from "react";
import Settings from "../../components/settings-components/Settings";
import Sidebar from "../../components/dashboard-components/Sidebar/Sidebar";
import {Box} from "@mui/joy";


export default function index() {
    return (
        <Box sx={{display: "flex", minHeight: "100dvh"}}>
            <Sidebar />
            <Settings />
        </Box>
    );
}
