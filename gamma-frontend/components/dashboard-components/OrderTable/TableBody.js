/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

import Chip from "@mui/joy/Chip";
import Stack from "@mui/joy/Stack";
import Link from "@mui/joy/Link";

import Checkbox from "@mui/joy/Checkbox";

import Typography from "@mui/joy/Typography";
import RowMenu from "./RowMenu";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import TableItem from "./TableItem";
import {useRouter} from "next/router";

export default function TableBody({
    selected,
    setSelected,
    order,
    setOrder,
    maxItems,
    data,
    currentPage,
    search,
    onPageCountChange,
}) {
    var validData = [];
    const router = useRouter();
    const query = router.query;
    const statusFilter = query.statusFilter;
    const platformFilter = query.platformFilter;
    const page = query.tablePage;
    const startIndex = (currentPage - 1) * 10;

    data.forEach((data) => {
        if (statusFilter != null && platformFilter != null) {
            if (statusFilter != "all") {
                if (data.status.toLowerCase() != statusFilter.toLowerCase()) {
                    return;
                }
            }
            if (platformFilter != "all") {
                if (
                    data.platform.toLowerCase() != platformFilter.toLowerCase()
                ) {
                    return;
                }
            }
            if (search != "") {
                if (!data.case_id.toString().includes(search)) {
                    return;
                }
            }
        }
        validData.push(data);
    });

    data = validData.slice(startIndex, startIndex + maxItems);
    const validPageCount =
        validData.length % 10 == 0
            ? Math.floor(validData.length / 10)
            : Math.floor(validData.length / 10) + 1;

    onPageCountChange(validPageCount);

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

    let tableItemArray = [];

    function generateTableArray() {
        tableItemArray = stableSort(data, getComparator(order, "case_id"))
            .slice(0, maxItems)
            .map((data) => (
                <TableItem
                    data={data}
                    selected={selected}
                    setSelected={setSelected}
                    style={{height: 100}}
                />
            ));

        if (maxItems > data.length) {
            const emptyItems = maxItems - data.length;
            console.log(emptyItems);
            for (let i = 0; i < emptyItems; i++) {
                tableItemArray.push(<tr style={{height: 44.5}}></tr>);
            }
        }
        return tableItemArray;
    }

    return <tbody>{generateTableArray()}</tbody>;
}
