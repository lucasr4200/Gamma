import * as React from "react";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";

import Typography from "@mui/joy/Typography";

import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import RowMenu from "../RowMenu";
import StatusChip from "./StatusChip";

export default function OrderListItem({id, date, status, customer}) {
    return (
        <ListItem
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
            }}
        >
            <ListItemContent
                sx={{display: "flex", gap: 2, alignItems: "start"}}
            >
                <ListItemDecorator>
                    <Avatar size="sm">{customer.initial}</Avatar>
                </ListItemDecorator>
                <div>
                    <Typography fontWeight={600} gutterBottom>
                        {customer.name}
                    </Typography>
                    <Typography level="body-xs" gutterBottom>
                        {customer.email}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 0.5,
                            mb: 1,
                        }}
                    >
                        <Typography level="body-xs">{date}</Typography>
                        <Typography level="body-xs">&bull;</Typography>
                        <Typography level="body-xs">{id}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                        }}
                    >
                        <Link level="body-sm" component="button">
                            Download
                        </Link>
                        <RowMenu />
                    </Box>
                </div>
            </ListItemContent>
            <StatusChip status={status}/>
        </ListItem>
    );
}
