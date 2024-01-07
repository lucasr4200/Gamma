import * as React from "react";

import Button from "@mui/joy/Button";

import Divider from "@mui/joy/Divider";

import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";

import Sheet from "@mui/joy/Sheet";

import IconButton, {iconButtonClasses} from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

import Filters from "./Filters";

export default function SearchAndSortMobile() {
    const [open, setOpen] = React.useState(false);
    return (
        <Sheet
            className="SearchAndFilters-mobile"
            sx={{
                display: {xs: "flex", sm: "none"},
                my: 1,
                gap: 1,
            }}
        >
            <Input
                size="sm"
                placeholder="Search"
                startDecorator={<SearchIcon />}
                sx={{flexGrow: 1}}
            />
            <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                <FilterAltIcon />
            </IconButton>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                    <ModalClose />
                    <Typography id="filter-modal" level="h2">
                        Filters
                    </Typography>
                    <Divider sx={{my: 2}} />
                    <Sheet
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Filters />
                        <Button color="primary" onClick={() => setOpen(false)}>
                            Submit
                        </Button>
                    </Sheet>
                </ModalDialog>
            </Modal>
        </Sheet>
    );
}
