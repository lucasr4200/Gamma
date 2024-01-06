import * as React from "react";
import {CssVarsProvider} from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import {ModalDialog, Typography, ModalClose} from "@mui/joy";
import Sidebar from "../Sidebar/Sidebar";
import OrderTable from "../OrderTable/OrderTable";
import OrderList from "../OrderList/OrderList";
import Header from "../Sidebar/SidebarHeader";
import DashboardHeader from "./DashboardHeader";
import DashboardBreadcrumbs from "./DashboardBreadcrumbs";
import {useRouter} from "next/router";
import CaseDetailsModal from "./CaseDetailsModal";
export default function Dashboard() {
    return (
        <>
            <CaseDetailsModal />
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <Box sx={{display: "flex", minHeight: "100dvh"}}>
                    
                    <Sidebar />
                    <Box
                        component="main"
                        className="MainContent"
                        sx={styles.box}
                    >
                        <DashboardBreadcrumbs />
                        <DashboardHeader />
                        <OrderTable />
                        <OrderList />
                    </Box>
                </Box>
            </CssVarsProvider>
        </>
    );
}

const styles = {
    box: {
        px: {xs: 2, md: 6},
        pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
        },
        pb: {xs: 2, sm: 2, md: 3},
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
    },
};
