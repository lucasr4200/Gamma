import Dashboard from "@/components/Dashboard/Dashboard";

import Login from "../components/Login/Login";

import {useRouter} from "next/router";
import {useSession} from "next-auth/react";

export default function index() {
    const {data: session} = useSession();
    const router = useRouter();

    if (session) {
        return (
            <>
                <Dashboard />
            </>
        );
    } else {
        return (
            <>
                <Login />
            </>
        );
    }
}

