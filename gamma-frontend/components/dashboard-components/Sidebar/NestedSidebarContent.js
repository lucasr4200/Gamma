import * as React from "react";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, {listItemButtonClasses} from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";

import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NestedSidebarContent() {
    return (
        <ListItem nested>
            <Toggler
                renderToggle={({open, setOpen}) => (
                    <ListItemButton onClick={() => setOpen(!open)}>
                        <AssignmentRoundedIcon />
                        <ListItemContent>
                            <Typography level="title-sm">Tasks</Typography>
                        </ListItemContent>
                        <KeyboardArrowDownIcon
                            sx={{
                                transform: open ? "rotate(180deg)" : "none",
                            }}
                        />
                    </ListItemButton>
                )}
            >
                <List sx={{gap: 0.5}}>
                    <ListItem sx={{mt: 0.5}}>
                        <ListItemButton>All tasks</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Backlog</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>In progress</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Done</ListItemButton>
                    </ListItem>
                </List>
            </Toggler>
        </ListItem>
    );
}
