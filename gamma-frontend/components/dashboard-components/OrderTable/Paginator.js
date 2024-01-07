import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import TablePagination from "@mui/material/TablePagination";
import IconButton, {iconButtonClasses} from "@mui/joy/IconButton";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {useRouter} from "next/router";

export default function Paginator({currentPage, pageCount, onPageChange}) {
    const handleChangePage = (event, newPage) => {
        onPageChange(newPage);
    };

    function handlePlatformFilterChange(event, newValue) {}
    return (
        <Pagination
            sx={{alignSelf: "center"}}
            component="div"
            count={pageCount}
            page={currentPage}
            onChange={handleChangePage}
        />
    );
}
