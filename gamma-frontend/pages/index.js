import Dashboard from "@/components/dashboard-components/Dashboard/Dashboard";

import Login from "../components/dashboard-components/Login/Login";
import {CssVarsProvider} from "@mui/joy";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import Sidebar from "../components/dashboard-components/Sidebar/Sidebar";
import CaseDetailsModal from "../components/dashboard-components/Dashboard/CaseDetailsModal";

import {Box, CssBaseline} from "@mui/joy";

export default function index(props) {
    const {data: session} = useSession();
    const router = useRouter();
    const data = props.data;

    if (session) {
        return (
            <Box sx={{display: "flex", minHeight: "100vh"}}>
                <Sidebar />
                <Dashboard data={data} />
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
export async function getServerSideProps(context) {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    const response = await fetch(
        "http://0.0.0.0:8000/api/cases",
        requestOptions,
    );
    const resData = await response.text();
    const resJSON = JSON.parse(JSON.parse(resData));
    return {
        props: {
            data: resJSON,
        },
    };
}
