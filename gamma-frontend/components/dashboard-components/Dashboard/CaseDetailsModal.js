import {useRouter} from "next/router";
import Modal from "@mui/joy/Modal";
import {
    ModalDialog,
    Typography,
    ModalClose,
    Divider,
    useColorScheme,
} from "@mui/joy";

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";

import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import ModalOverflow from "@mui/joy/ModalOverflow";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import {LogoDiscord, LogoReddit, LogoTwitter} from "react-ionicons";
import CaseDetailsCard from "./CaseDetailsCard";

import StatusChip from "../StatusChip";
import Link from "next/link";
import casePatcher from "@/pages/api/casePatcher";

export default function CaseDetailsModal(props) {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const data = props.data.cases;
    var caseObject = null;
    var query = router.query;
    const setSnackbarOpen = props.setSnackbarOpen;
    function handleModalClose() {
        query.caseId = null;
        router.push(
            {
                query,
            },
            "/",
        );
    }

    const caseId = router.query.caseId;
    const discordLogoColor =
        colorScheme.mode === "dark" ? "#FFFFFF" : "#000000";
    if (caseId) {
        caseObject = data.find((row) => row.case_id == caseId);
    }

    function handleResolveCase() {
        casePatcher(caseId, "resolve").then(() => {
            setSnackbarOpen(true);
            handleModalClose();
        });
    }
    function handleEscalateCase() {
        casePatcher(caseId, "escalate").then(() => {
            setSnackbarOpen(true);
            handleModalClose();
        });
    }
    function handleUnreviewCase() {
        casePatcher(caseId, "unreview").then(() => {
            setSnackbarOpen(true);
            handleModalClose();
        });
    }

    return (
        <>
            {router.query.caseId && (
                <Modal open onClose={handleModalClose}>
                    <ModalOverflow
                        sx={{
                            left: "25vw",
                            width: "50vw",
                            "&::-webkit-scrollbar": {display: "none"},
                        }}
                    >
                        <ModalDialog
                            color="primary"
                            layout="center"
                            size="lg"
                            variant="plain"
                        >
                            <Stack
                                direction="row"
                                spacing={3}
                                sx={{display: {xs: "none", md: "flex"}, my: 1}}
                            >
                                <Stack direction="column" spacing={1}>
                                    <Stack spacing={"1vw"}>
                                        <Stack direction="column" spacing={1}>
                                            <AspectRatio
                                                ratio="1"
                                                maxHeight={200}
                                                sx={{
                                                    flex: 1,
                                                    minWidth: 120,
                                                    borderRadius: "100%",
                                                }}
                                            >
                                                <img
                                                    src="https://scontent.fyxd3-1.fna.fbcdn.net/v/t39.30808-6/314012946_5776686345732381_1278809893833372774_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=n6GA94HAr7cAX_WpVnX&_nc_ht=scontent.fyxd3-1.fna&oh=00_AfDCndXpKK7GIQH_QT2aNBhB7Q1WAKe6e0oGr-t3c1Lh4w&oe=65A05CEA"
                                                    srcSet="https://scontent.fyxd3-1.fna.fbcdn.net/v/t39.30808-6/314012946_5776686345732381_1278809893833372774_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=n6GA94HAr7cAX_WpVnX&_nc_ht=scontent.fyxd3-1.fna&oh=00_AfDCndXpKK7GIQH_QT2aNBhB7Q1WAKe6e0oGr-t3c1Lh4w&oe=65A05CEA"
                                                    loading="lazy"
                                                    alt=""
                                                />
                                            </AspectRatio>
                                        </Stack>
                                        <Stack spacing={3}></Stack>
                                    </Stack>
                                    <Stack spacing={1.5}>
                                        <Typography level="title-lg">
                                            Case Actions
                                        </Typography>
                                        <Stack spacing={1}>
                                            {caseObject.status !=
                                                "Resolved" && (
                                                <Button
                                                    color="success"
                                                    variant="outlined"
                                                    onClick={handleResolveCase}
                                                >
                                                    Resolve Case
                                                </Button>
                                            )}
                                            {caseObject.status !=
                                                "Unreviewed" && (
                                                <Button
                                                    color="neutral"
                                                    variant="outlined"
                                                    onClick={handleUnreviewCase}
                                                >
                                                    Mark as Unreviewed
                                                </Button>
                                            )}
                                            {caseObject.status !=
                                                "Further Action Needed" && (
                                                <Button
                                                    color="danger"
                                                    onClick={handleEscalateCase}
                                                >
                                                    Escalate Case
                                                </Button>
                                            )}
                                        </Stack>
                                        <Divider />
                                    </Stack>

                                    <Stack spacing={2}>
                                        <Stack spacing={1}>
                                            <Typography level="title-md">
                                                Status
                                            </Typography>
                                            <StatusChip
                                                status={caseObject.status}
                                            />
                                        </Stack>
                                        <Divider />
                                        <Stack spacing={1}>
                                            <Typography level="title-md">
                                                Case ID
                                            </Typography>
                                            <Typography>{caseId}</Typography>
                                        </Stack>
                                        <Divider />
                                        <Stack spacing={1}>
                                            <Typography level="title-md">
                                                Name
                                            </Typography>
                                            <Typography>
                                                {caseObject.offender}
                                            </Typography>
                                        </Stack>
                                        <Divider />
                                        <Stack spacing={1}>
                                            <Typography level="title-md">
                                                Platform
                                            </Typography>
                                            <Typography>
                                                {caseObject.platform}
                                            </Typography>
                                        </Stack>
                                        <Divider />
                                    </Stack>
                                </Stack>

                                <Stack
                                    spacing={2}
                                    sx={{flexGrow: 1}}
                                    justifyContent="space-around"
                                >
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        spacing={2}
                                    >
                                        <Typography level="h2">
                                            @{caseObject.offender}
                                        </Typography>
                                        <Stack
                                            direction={"row"}
                                            spacing={"1vw"}
                                        ></Stack>
                                        <Stack
                                            direction={"row"}
                                            spacing={"1vw"}
                                        >
                                            <a
                                                href={caseObject.message_url}
                                                target="_blank"
                                                
                                            >
                                                <Button
                                                    sx={{
                                                        padding: "10px",
                                                        width: "100%",
                                                    }}
                                                >
                                                    <Typography
                                                        level="title-md"
                                                        textColor={"white"}
                                                    >
                                                        Go to original post
                                                    </Typography>
                                                </Button>
                                            </a>
                                            {/* <Dropdown>
                                                {caseObject.status.toLowerCase() !==
                                                    "resolved" && (
                                                    <MenuButton
                                                        variant="solid"
                                                        color="danger"
                                                        bgcolor="red"
                                                    >
                                                        <Typography
                                                            level="title-md"
                                                            textColor={"white"}
                                                        >
                                                            Moderation Actions
                                                        </Typography>
                                                    </MenuButton>
                                                )}
                                                <Menu style={{zIndex: 9999}}>
                                                    <MenuItem color="warning">
                                                        Mute User
                                                    </MenuItem>
                                                    <MenuItem color="danger">
                                                        Ban User
                                                    </MenuItem>
                                                </Menu>
                                            </Dropdown> */}
                                        </Stack>
                                    </Stack>
                                    <Divider />

                                    <Stack spacing={0}>
                                        <CaseDetailsCard
                                            title={"Flagged Content"}
                                            content={caseObject.message}
                                        />
                                    </Stack>
                                    {caseObject.context ? (
                                        <Stack spacing={0}>
                                            <CaseDetailsCard
                                                title={
                                                    "Context - Content is a reply"
                                                }
                                                content={caseObject.context}
                                            />
                                        </Stack>
                                    ) : (
                                        <Stack spacing={0}>
                                            <CaseDetailsCard
                                                title={"Context"}
                                                content="No Context Available"
                                            />
                                        </Stack>
                                    )}
                                    <Stack spacing={0}>
                                        <CaseDetailsCard
                                            title={"AI Comment"}
                                            content={caseObject.ai_comment}
                                        />
                                    </Stack>

                                    <div>
                                        <CaseDetailsCard>
                                            <Stack spacing={1}>
                                                <Typography level="title-md">
                                                    AI Tags
                                                </Typography>

                                                <Box>
                                                    <Box
                                                        role="group"
                                                        sx={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: 1,
                                                        }}
                                                    >
                                                        {caseObject.ai_tags.map(
                                                            (name) => {
                                                                return (
                                                                    <Chip
                                                                        key={
                                                                            name
                                                                        }
                                                                        color="neutral"
                                                                        variant="outlined"
                                                                    >
                                                                        {name}
                                                                    </Chip>
                                                                );
                                                            },
                                                        )}
                                                    </Box>
                                                </Box>
                                            </Stack>
                                        </CaseDetailsCard>
                                    </div>
                                </Stack>
                            </Stack>
                        </ModalDialog>
                    </ModalOverflow>
                </Modal>
            )}
        </>
    );
}

const styles = (theme) => ({
    modalStyle1: {
        position: "absolute",
        top: "10%",
        left: "10%",
        overflow: "scroll",
        height: "100%",
        display: "block",
    },
});
