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

const rows = [
    {
        id: "INV-1234",
        date: "Feb 3, 2023",
        status: "Further Action Needed",
        customer: {
            image: "O",
            name: "Olivia Ryhe",
            email: "olivia@email.com",
        },
    },
    {
        id: "INV-1233",
        date: "Feb 3, 2023",
        status: "Unreviewed",
        customer: {
            image: "S",
            name: "Steve Hampton",
            email: "steve.hamp@email.com",
        },
    },
    {
        id: "INV-1232",
        date: "Feb 3, 2023",
        status: "Resolved",
        customer: {
            image: "C",
            name: "Ciaran Murray",
            email: "ciaran.murray@email.com",
        },
    },
    // {
    //     id: "INV-1231",
    //     date: "Feb 3, 2023",
    //     status: "Refunded",
    //     customer: {
    //         initial: "M",
    //         name: "Maria Macdonald",
    //         email: "maria.mc@email.com",
    //     },
    // },
    // {
    //     id: "INV-1230",
    //     date: "Feb 3, 2023",
    //     status: "Cancelled",
    //     customer: {
    //         initial: "C",
    //         name: "Charles Fulton",
    //         email: "fulton@email.com",
    //     },
    // },
    // {
    //     id: "INV-1229",
    //     date: "Feb 3, 2023",
    //     status: "Cancelled",
    //     customer: {
    //         initial: "J",
    //         name: "Jay Hooper",
    //         email: "hooper@email.com",
    //     },
    // },
    // {
    //     id: "INV-1228",
    //     date: "Feb 3, 2023",
    //     status: "Refunded",
    //     customer: {
    //         initial: "K",
    //         name: "Krystal Stevens",
    //         email: "k.stevens@email.com",
    //     },
    // },
    // {
    //     id: "INV-1227",
    //     date: "Feb 3, 2023",
    //     status: "Paid",
    //     customer: {
    //         initial: "S",
    //         name: "Sachin Flynn",
    //         email: "s.flyn@email.com",
    //     },
    // },
    // {
    //     id: "INV-1226",
    //     date: "Feb 3, 2023",
    //     status: "Cancelled",
    //     customer: {
    //         initial: "B",
    //         name: "Bradley Rosales",
    //         email: "brad123@email.com",
    //     },
    // },
    // {
    //     id: "INV-1225",
    //     date: "Feb 3, 2023",
    //     status: "Paid",
    //     customer: {
    //         initial: "O",
    //         name: "Olivia Ryhe",
    //         email: "olivia@email.com",
    //     },
    // },
    // {
    //     id: "INV-1224",
    //     date: "Feb 3, 2023",
    //     status: "Cancelled",
    //     customer: {
    //         initial: "S",
    //         name: "Steve Hampton",
    //         email: "steve.hamp@email.com",
    //     },
    // },
    // {
    //     id: "INV-1227",
    //     date: "Feb 3, 2023",
    //     status: "Paid",
    //     customer: {
    //         initial: "S",
    //         name: "Sachin Flynn",
    //         email: "s.flyn@email.com",
    //     },
    // },
    // {
    //     id: "INV-1226",
    //     date: "Feb 3, 2023",
    //     status: "Cancelled",
    //     customer: {
    //         initial: "B",
    //         name: "Bradley Rosales",
    //         email: "brad123@email.com",
    //     },
    // },
    // {
    //     id: "INV-1225",
    //     date: "Feb 3, 2023",
    //     status: "Paid",
    //     customer: {
    //         initial: "O",
    //         name: "Olivia Ryhe",
    //         email: "olivia@email.com",
    //     },
    // },
    // {
    //     id: "INV-1224",
    //     date: "Feb 3, 2023",
    //     status: "Cancelled",
    //     customer: {
    //         initial: "S",
    //         name: "Steve Hampton",
    //         email: "steve.hamp@email.com",
    //     },
    // },
];

export default function OrderTable() {
    const [order, setOrder] = React.useState("desc");
    const [selected, setSelected] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <React.Fragment>
            <SearchAndSort />
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={styles.table}
                >
                    <TableHeader
                        selected={selected}
                        setSelected={setSelected}
                        rows={rows}
                        order={order}
                        setOrder={setOrder}
                    />
                    <TableBody
                        selected={selected}
                        setSelected={setSelected}
                        rows={rows}
                        order={order}
                        setOrder={setOrder}
                        maxItems={10}
                    />
                </Table>
            </TableContainer>
            <Paginator rows={rows} currentPage={currentPage} />
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

export async function getServerSideProps() {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    const req = await fetch("10.0.0.150:8000/api/cases", requestOptions);
    const res = req.body;

    console.log(res);
    return res;
}
