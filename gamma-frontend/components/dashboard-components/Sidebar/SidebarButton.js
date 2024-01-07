import * as React from "react";

import ListItem from "@mui/joy/ListItem";
import ListItemButton, {listItemButtonClasses} from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export default function SidebarButton({children, onClick, selected, icon}) {
    return (
        <ListItem>
            <ListItemButton selected={selected} onClick={onClick}>
                {icon}
                <ListItemContent>
                    <Typography level="title-sm">{children}</Typography>
                </ListItemContent>
            </ListItemButton>
        </ListItem>
    );
}
