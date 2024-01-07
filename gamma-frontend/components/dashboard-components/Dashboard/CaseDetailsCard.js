import {ModalDialog, Typography, ModalClose} from "@mui/joy";

import * as React from "react";

import Stack from "@mui/joy/Stack";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function CaseDetailsCard({title, content, children}) {
    if (children) {
        return (
            <Card sx={{"--Card-padding": "10px", minHeight: "12vh"}}>
                <CardContent>
                    <Typography level="title-lg">{title}</Typography>
                    <Stack spacing={0}>{children}</Stack>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{"--Card-padding": "8px", minHeight: "12vh"}}>
            <CardContent>
                <Stack spacing={0}>
                    <Typography level="title-md">{title}</Typography>
                    <Typography level="body-md">{content}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}
