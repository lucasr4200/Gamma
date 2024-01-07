import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

import Link from "next/link";

import Checkbox from "@mui/joy/Checkbox";

import Typography from "@mui/joy/Typography";
import RowMenu from "./RowMenu";

import StatusChip from "../StatusChip";

export default function TableItem({row, selected, setSelected}) {
    return (
        <tr key={row.id}>
            <td>
                <Box />
            </td>
            <td>
                <Typography level="body-xs">{row.id}</Typography>
            </td>
            <td>
                <Typography level="body-xs">{row.date}</Typography>
            </td>
            <td>
                <StatusChip status={row.status} />
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
                </Box>
            </td>
        </tr>
    );
}
