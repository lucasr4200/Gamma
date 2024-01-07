import AppWrapper from "@/components/AppWrapper";
import "@/styles/globals.css";
import {SessionProvider} from "next-auth/react";

export default function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </SessionProvider>
    );
}
