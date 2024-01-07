import * as React from "react";

import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

import IconButton from "@mui/joy/IconButton";

import Typography from "@mui/joy/Typography";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {useSession, signOut} from "next-auth/react";

export default function AccountInfo() {
    const {status, data: session} = useSession({required: true});

    var name = "";
    var email = "";
    var image = "";
    if (status != "loading") {
        name = session.user.name;
        email = session.user.email;
        image = session.user.image;
    }

    return (
        <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
            <Avatar variant="outlined" size="sm" src={image} />
            <Box sx={{minWidth: 0, flex: 1}}>
                <Typography level="title-sm">{name}</Typography>
                <Typography level="body-xs">
                    {(email.length > 18 ? email.substring(0, 18) : email) +
                        "..."}
                </Typography>
            </Box>
            <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                onClick={signOut}
            >
                <LogoutRoundedIcon />
            </IconButton>
        </Box>
    );
}
