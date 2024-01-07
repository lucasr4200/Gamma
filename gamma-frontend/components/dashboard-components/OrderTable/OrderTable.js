/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import {GetServerSideProps} from "next";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

import SearchAndSort from "./SearchAndSort";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableContainer from "./TableContainer";
import Paginator from "./Paginator";

export default function OrderTable(props) {
    const [order, setOrder] = React.useState("asc");
    const [selected, setSelected] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [search, setSearch] = React.useState("");
    const data = props.data.cases;
    const [pageCount, setPageCount] = React.useState(
        data.length % 10 == 0
            ? Math.floor(data.length / 10)
            : Math.floor(data.length / 10) + 1,
    );

    return (
        <React.Fragment>
            <SearchAndSort
                search={search}
                onSearchChange={setSearch}
                setCurrentPage={setCurrentPage}
            />
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={styles.table}
                >
                    <TableHeader order={order} setOrder={setOrder} />
                    <TableBody
                        selected={selected}
                        setSelected={setSelected}
                        order={order}
                        setOrder={setOrder}
                        maxItems={rowsPerPage}
                        data={data}
                        currentPage={currentPage}
                        search={search}
                        onPageCountChange={setPageCount}
                        setCurrentPage={setCurrentPage}
                    />
                </Table>
            </TableContainer>
            <Paginator
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={setCurrentPage}
            />
        </React.Fragment>
    );
}

const styles = {
    table: {
        "--TableCell-headBackground": "var(--joy-palette-background-level1)",
        "--Table-headerUnderlineThickness": "1px",
        "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
        "--TableCell-paddingY": "4px",
        "--TableCell-paddingX": "8px",
        height: "65vh",
    },
};
