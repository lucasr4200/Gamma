import * as React from "react";
import Snackbar from "@mui/joy/Snackbar";
import {Typography} from "@mui/joy";

export default function SuccessSnackbar({open, setOpen}) {
    return (
        <Snackbar
            autoHideDuration={2000}
            open={open}
            variant="soft"
            color="success"
            onClose={(event, reason) => {
                if (reason === "clickaway") {
                    return;
                }
                setOpen(false);
            }}
        >
            {" "}
            <Typography level="title-md">Action was successful!</Typography>
        </Snackbar>
    );
}
