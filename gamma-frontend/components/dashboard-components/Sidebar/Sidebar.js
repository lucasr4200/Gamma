import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, {listItemButtonClasses} from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ColorSchemeToggle from "../ColorSchemeToggle";
import {closeSidebar} from "../utils";
import AccountInfo from "./AccountInfo";
import SidebarHeader from "./SidebarHeader";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SidebarButton from "./SidebarButton";
import {ListDivider} from "@mui/joy";
import Link from "next/link";

import {usePathname} from "next/navigation";

function Toggler({defaultExpanded = false, renderToggle, children}) {
    const [open, setOpen] = React.useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({open, setOpen})}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: open ? "1fr" : "0fr",
                    transition: "0.2s ease",
                    "& > *": {
                        overflow: "hidden",
                    },
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}

export default function Sidebar() {
    const path = usePathname();

    return (
        <>
            <SidebarHeader />
            <Sheet
                className="Sidebar"
                sx={{
                    position: {xs: "fixed", md: "sticky"},
                    transform: {
                        xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
                        md: "none",
                    },
                    transition: "transform 0.4s, width 0.4s",
                    zIndex: 10000,
                    height: "100dvh",
                    width: "var(--Sidebar-width)",
                    top: 0,
                    p: 2,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRight: "1px solid",
                    borderColor: "divider",
                }}
            >
                <GlobalStyles
                    styles={(theme) => ({
                        ":root": {
                            "--Sidebar-width": "220px",
                            [theme.breakpoints.up("lg")]: {
                                "--Sidebar-width": "240px",
                            },
                        },
                    })}
                />
                <Box
                    className="Sidebar-overlay"
                    sx={{
                        position: "fixed",
                        zIndex: 9998,
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        opacity: "var(--SideNavigation-slideIn)",
                        backgroundColor:
                            "var(--joy-palette-background-backdrop)",
                        transition: "opacity 0.4s",
                        transform: {
                            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
                            lg: "translateX(-100%)",
                        },
                    }}
                    onClick={() => closeSidebar()}
                />
                <Box sx={{display: "flex", gap: 1, alignItems: "center"}}>
                    <Avatar
                        size="md"
                        src="https://i.gyazo.com/4899bbc7df39865ea59c3ac1127d52d3.png"
                    />

                    <Typography level="title-lg">Gamma AI</Typography>
                    <ColorSchemeToggle sx={{ml: "auto"}} />
                </Box>
                <ListDivider />
                <Box
                    sx={{
                        minHeight: 0,
                        overflow: "hidden auto",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        [`& .${listItemButtonClasses.root}`]: {
                            gap: 1.5,
                        },
                    }}
                >
                    <List
                        size="sm"
                        sx={{
                            gap: 1,
                            "--List-nestedInsetStart": "30px",
                            "--ListItem-radius": (theme) =>
                                theme.vars.radius.sm,
                        }}
                    >
                        {/* <SidebarButton icon={<HomeRoundedIcon />}>
                            Home
                        </SidebarButton> */}
                        <Link href={"/"}>
                            <SidebarButton
                                selected={path === "/"}
                                icon={<DashboardRoundedIcon />}
                            >
                                Dashboard
                            </SidebarButton>
                        </Link>
                        <ListItem nested>
                            <Toggler
                                renderToggle={({open, setOpen}) => (
                                    <ListItemButton
                                        onClick={() => setOpen(!open)}
                                    >
                                        <GroupRoundedIcon />
                                        <ListItemContent>
                                            <Typography level="title-sm">
                                                Users
                                            </Typography>
                                        </ListItemContent>
                                        <KeyboardArrowDownIcon
                                            sx={{
                                                transform: open
                                                    ? "rotate(180deg)"
                                                    : "none",
                                            }}
                                        />
                                    </ListItemButton>
                                )}
                            >
                                <List sx={{gap: 0.5}}>
                                    <ListItem>
                                        <ListItemButton>
                                            User roles & permissions
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                            Create a new user
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Toggler>
                        </ListItem>
                    </List>

                    <List
                        size="sm"
                        sx={{
                            mt: "auto",
                            flexGrow: 0,
                            "--ListItem-radius": (theme) =>
                                theme.vars.radius.sm,
                            "--List-gap": "8px",
                            mb: 2,
                        }}
                    >
                        <Link href="/settings">
                            <ListItem>
                                <ListItemButton selected={path === "/settings"}>
                                    <SettingsRoundedIcon />
                                    Settings
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>

                {/* <NotificationCard
                title="Title"
                description="Description"
                action="Do this"
            /> */}
                <Divider />
                <AccountInfo />
            </Sheet>
        </>
    );
}
