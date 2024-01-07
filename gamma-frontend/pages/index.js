import Dashboard from "@/components/dashboard-components/Dashboard/Dashboard";

import Login from "../components/dashboard-components/Login/Login";
import {CssVarsProvider} from "@mui/joy";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import Sidebar from "../components/dashboard-components/Sidebar/Sidebar";
import CaseDetailsModal from "../components/dashboard-components/Dashboard/CaseDetailsModal";

import {Box, CssBaseline} from "@mui/joy";

export default function index() {
    const {data: session} = useSession();
    const router = useRouter();

    if (session) {
        return (
            <Box sx={{display: "flex", minHeight: "100dvh"}}>
                <Sidebar />
                <Dashboard />
            </Box>
        );
    } else {
        return (
            <>
                <Login />
            </>
        );
    }
}
