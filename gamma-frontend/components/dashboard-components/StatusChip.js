import * as React from "react";

import Chip from "@mui/joy/Chip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

export default function StatusChip({status}) {
    return (
        <Chip
            variant="soft"
            size="sm"
            startDecorator={
                {
                    Resolved: <CheckRoundedIcon />,
                    Unreviewed: <AutorenewRoundedIcon />,
                    "Further Action Needed": <ErrorOutlineIcon />,
                }[status]
            }
            color={
                {
                    Resolved: "success",
                    Unreviewed: "neutral",
                    "Further Action Needed": "danger",
                }[status]
            }
        >
            {status}
        </Chip>
    );
}
