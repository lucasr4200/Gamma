import * as React from "react";

import Link from "@mui/joy/Link";

import Checkbox from "@mui/joy/Checkbox";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box} from "@mui/joy";

export default function TableHeader({order, setOrder}) {
    return (
        <thead>
            <tr>
                <th
                    style={{
                        width: 0,
                        textAlign: "center",
                        padding: "12px 6px",
                    }}
                >
                    <Box />
                </th>
                <th style={{width: 120, padding: "12px 6px"}}>
                    <Link
                        underline="none"
                        color="primary"
                        component="button"
                        onClick={() =>
                            setOrder(order === "asc" ? "desc" : "asc")
                        }
                        fontWeight="lg"
                        endDecorator={<ArrowDropDownIcon />}
                        sx={{
                            "& svg": {
                                transition: "0.2s",
                                transform:
                                    order === "desc"
                                        ? "rotate(0deg)"
                                        : "rotate(180deg)",
                            },
                        }}
                    >
                        Case
                    </Link>
                </th>
                <th style={{width: 140, padding: "12px 6px"}}>Date</th>
                <th style={{width: 140, padding: "12px 6px"}}>Status</th>
                <th style={{width: 240, padding: "12px 6px"}}>Offender</th>
                <th style={{width: 140, padding: "12px 6px"}}></th>
            </tr>
        </thead>
    );
}
