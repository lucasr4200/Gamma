import * as React from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Box from "@mui/joy/Box";

export default function DashboardBreadcrumbs() {
    return (
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Breadcrumbs
                size="sm"
                aria-label="breadcrumbs"
                separator={<ChevronRightRoundedIcon fontSize="sm" />}
                sx={{pl: 0}}
            >
                <Link underline="none" color="neutral" aria-label="Home"></Link>
                <Link
                    underline="hover"
                    color="neutral"
                    fontSize={12}
                    fontWeight={500}
                >
                    Dashboard
                </Link>
            </Breadcrumbs>
        </Box>
    );
}
