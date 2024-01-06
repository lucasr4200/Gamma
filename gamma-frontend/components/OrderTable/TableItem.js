import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

import Chip from "@mui/joy/Chip";

import Link from "next/link";

import Checkbox from "@mui/joy/Checkbox";

import Typography from "@mui/joy/Typography";
import RowMenu from "../RowMenu";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

export default function TableItem({row, selected, setSelected}) {
    return (
        <tr key={row.id}>
            <td
                style={{
                    textAlign: "center",
                    width: 120,
                }}
            >
                <Checkbox
                    size="sm"
                    checked={selected.includes(row.id)}
                    color={selected.includes(row.id) ? "primary" : undefined}
                    onChange={(event) => {
                        setSelected((ids) =>
                            event.target.checked
                                ? ids.concat(row.id)
                                : ids.filter((itemId) => itemId !== row.id),
                        );
                    }}
                    slotProps={{
                        checkbox: {
                            sx: {textAlign: "left"},
                        },
                    }}
                    sx={{verticalAlign: "text-bottom"}}
                />
            </td>
            <td>
                <Typography level="body-xs">{row.id}</Typography>
            </td>
            <td>
                <Typography level="body-xs">{row.date}</Typography>
            </td>
            <td>
                <Chip
                    variant="soft"
                    size="sm"
                    startDecorator={
                        {
                            Paid: <CheckRoundedIcon />,
                            Refunded: <AutorenewRoundedIcon />,
                            Cancelled: <BlockIcon />,
                        }[row.status]
                    }
                    color={
                        {
                            Paid: "success",
                            Refunded: "neutral",
                            Cancelled: "danger",
                        }[row.status]
                    }
                >
                    {row.status}
                </Chip>
            </td>
            <td>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                    }}
                >
                    <Avatar size="sm">{row.customer.initial}</Avatar>
                    <div>
                        <Typography level="body-xs">
                            {row.customer.name}
                        </Typography>
                        <Typography level="body-xs">
                            {row.customer.email}
                        </Typography>
                    </div>
                </Box>
            </td>
            <td>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                    }}
                >
                    <Link
                        level="body-xs"
                        component="button"
                        href={"/?caseId=" + row.id}
                        as={row.id}
                    >
                        View
                    </Link>
                    <RowMenu />
                </Box>
            </td>
        </tr>
    );
}
