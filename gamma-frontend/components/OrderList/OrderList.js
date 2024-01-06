/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import OrderListItem from "./OrderListItem";
import Paginator from "./Paginator";

const listItems = [
    {
        id: "INV-1234",
        date: "Feb 3, 2023",
        status: "Refunded",
        customer: {
            initial: "O",
            name: "Olivia Ryhe",
            email: "olivia@email.com",
        },
    },
    {
        id: "INV-1233",
        date: "Feb 3, 2023",
        status: "Paid",
        customer: {
            initial: "S",
            name: "Steve Hampton",
            email: "steve.hamp@email.com",
        },
    },
    {
        id: "INV-1232",
        date: "Feb 3, 2023",
        status: "Refunded",
        customer: {
            initial: "C",
            name: "Ciaran Murray",
            email: "ciaran.murray@email.com",
        },
    },
    {
        id: "INV-1231",
        date: "Feb 3, 2023",
        status: "Refunded",
        customer: {
            initial: "M",
            name: "Maria Macdonald",
            email: "maria.mc@email.com",
        },
    },
    {
        id: "INV-1230",
        date: "Feb 3, 2023",
        status: "Cancelled",
        customer: {
            initial: "C",
            name: "Charles Fulton",
            email: "fulton@email.com",
        },
    },
    {
        id: "INV-1229",
        date: "Feb 3, 2023",
        status: "Cancelled",
        customer: {
            initial: "J",
            name: "Jay Hooper",
            email: "hooper@email.com",
        },
    },
];

export default function OrderList() {
    return (
        <Box sx={{display: {xs: "block", sm: "none"}}}>
            {listItems.map((listItem) => (
                <List
                    key={listItem.id}
                    size="sm"
                    sx={{
                        "--ListItem-paddingX": 0,
                    }}
                >
                    <OrderListItem
                        id={listItem.id}
                        date={listItem.date}
                        status={listItem.status}
                        customer={listItem.customer}
                    />
                    <ListDivider />
                </List>
            ))}
            <Paginator />
        </Box>
    );
}
