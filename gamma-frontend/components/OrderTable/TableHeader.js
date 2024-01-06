import * as React from "react";

import Link from "@mui/joy/Link";

import Checkbox from "@mui/joy/Checkbox";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TableHeader({selected, setSelected, rows, order, setOrder}) {

    return (
        <thead>
            <tr>
                <th
                    style={{
                        width: 48,
                        textAlign: "center",
                        padding: "12px 6px",
                    }}
                >
                    <Checkbox
                        size="sm"
                        indeterminate={
                            selected.length > 0 &&
                            selected.length !== rows.length
                        }
                        checked={selected.length === rows.length}
                        onChange={(event) => {
                            setSelected(
                                event.target.checked
                                    ? rows.map((row) => row.id)
                                    : [],
                            );
                        }}
                        color={
                            selected.length > 0 ||
                            selected.length === rows.length
                                ? "primary"
                                : undefined
                        }
                        sx={{verticalAlign: "text-bottom"}}
                    />
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
                        Invoice
                    </Link>
                </th>
                <th style={{width: 140, padding: "12px 6px"}}>Date</th>
                <th style={{width: 140, padding: "12px 6px"}}>Status</th>
                <th style={{width: 240, padding: "12px 6px"}}>Customer</th>
                <th style={{width: 140, padding: "12px 6px"}}> </th>
            </tr>
        </thead>
    );
}
