import * as React from "react";

import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

import IconButton from "@mui/joy/IconButton";

import LinearProgress from "@mui/joy/LinearProgress";

import Typography from "@mui/joy/Typography";

import Stack from "@mui/joy/Stack";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function NotificationCard({title, description, action}) {
    return (
        <Card
            invertedColors
            variant="soft"
            color="warning"
            size="sm"
            sx={{boxShadow: "none"}}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography level="title-sm">{title}</Typography>
                <IconButton size="sm">
                    <CloseRoundedIcon />
                </IconButton>
            </Stack>
            <Typography level="body-xs">{description}</Typography>
            <LinearProgress
                variant="outlined"
                value={80}
                determinate
                sx={{my: 1}}
            />
            <Button size="sm" variant="solid">
                {action}
            </Button>
        </Card>
    );
}
