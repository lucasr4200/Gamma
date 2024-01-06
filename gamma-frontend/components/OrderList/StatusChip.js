import * as React from "react";

import Chip from "@mui/joy/Chip";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

export default function StatusChip({status}) {
    return (
        <Chip
            variant="soft"
            size="sm"
            startDecorator={
                {
                    Paid: <CheckRoundedIcon />,
                    Refunded: <AutorenewRoundedIcon />,
                    Cancelled: <BlockIcon />,
                }[status]
            }
            color={
                {
                    Paid: "success",
                    Refunded: "neutral",
                    Cancelled: "danger",
                }[status]
            }
        >
            {status}
        </Chip>
    );
}
