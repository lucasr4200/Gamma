/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";

import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export default function RowMenu() {
    return (
        <Dropdown>
            <MenuButton
                slots={{root: IconButton}}
                slotProps={{
                    root: {variant: "plain", color: "neutral", size: "sm"},
                }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{minWidth: 140}}>
                <MenuItem color="danger">Delete</MenuItem>
            </Menu>
        </Dropdown>
    );
}
