import * as React from "react";

import Box from "@mui/joy/Box";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import Input from "@mui/joy/Input";

import SearchIcon from "@mui/icons-material/Search";

import Filters from "./Filters";
import SearchAndSortMobile from "./SearchAndSortMobile";
export default function SearchAndSort({search, onSearchChange, setCurrentPage}) {
    function handleSearchChange(event) {
        onSearchChange(event.target.value);
    }
    return (
        <>
            <SearchAndSortMobile />
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: "sm",
                    py: 2,
                    display: {xs: "none", sm: "flex"},
                    flexWrap: "wrap",
                    gap: 1.5,
                    "& > *": {
                        minWidth: {xs: "120px", md: "160px"},
                    },
                }}
            >
                <FormControl sx={{flex: 1}} size="sm">
                    <FormLabel>Search for a case</FormLabel>
                    <Input
                        size="sm"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                        startDecorator={<SearchIcon />}
                    />
                </FormControl>
                <Filters setCurrentPage={setCurrentPage}/>
            </Box>
        </>
    );
}
