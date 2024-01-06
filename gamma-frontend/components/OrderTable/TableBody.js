/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

import Chip from "@mui/joy/Chip";

import Link from "@mui/joy/Link";

import Checkbox from "@mui/joy/Checkbox";

import Typography from "@mui/joy/Typography";
import RowMenu from "../RowMenu";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import TableItem from "./TableItem";

export default function TableBody({
    selected,
    setSelected,
    rows,
    order,
    setOrder,
    maxItems = 10,
}) {
    rows = rows.slice(0, maxItems);

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
    // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
    // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
    // with exampleArray.slice().sort(exampleComparator)
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
    return (
        <tbody>
            {stableSort(rows, getComparator(order, "id")).map((row) => (
                <TableItem
                    row={row}
                    selected={selected}
                    setSelected={setSelected}
                />
            ))}
        </tbody>
    );
}
