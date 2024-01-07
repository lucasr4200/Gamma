import * as React from "react";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import {Divider, IconButton} from "@mui/joy";
import {useRouter} from "next/router";

export default function DashboardHeader({setSnackbarOpen}) {
    const router = useRouter();

    function handleRefresh() {
        setSnackbarOpen(true);
        router.push(
            {
                query: {
                    ...router.query,
                },
            },
            "/",
        );
    }
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    mb: 1,
                    gap: 1,
                    flexDirection: {xs: "column", sm: "row"},
                    alignItems: {xs: "start", sm: "center"},
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <Stack direction="row" spacing={2}>
                    <Typography level="h2" component="h1">
                        Dashboard
                    </Typography>
                    <IconButton variant="outlined" onClick={handleRefresh}>
                        <RefreshIcon />
                    </IconButton>
                </Stack>
            </Box>

            <Divider />
        </>
    );
}
