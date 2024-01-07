import {useRouter} from "next/router";
import Modal from "@mui/joy/Modal";
import {ModalDialog, Typography, ModalClose, Divider} from "@mui/joy";

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
];

export default function CaseDetailsModal() {
    const [selected, setSelected] = React.useState("");
    const router = useRouter();

    function handleModalClose() {
        router.push("/");
    }

    const caseId = router.query.caseId;

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
                            <ModalClose />
                            <Typography
                                component="h1"
                                id="modal-title"
                                level="title-lg"
                                textColor="inherit"
                                fontWeight="lg"
                                mb={1}
                            >
                                Case Details
                            </Typography>
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
                                                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                    srcSet="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                    loading="lazy"
                                                    alt=""
                                                />
                                            </AspectRatio>
                                            <IconButton
                                                size="md"
                                                variant="plain"
                                                disabled
                                                sx={{
                                                    bgcolor: "background.body",
                                                    position: "absolute",
                                                    zIndex: 2,
                                                    borderRadius: "50%",
                                                    left: 100,
                                                    top: 170,
                                                    boxShadow: "sm",
                                                }}
                                            >
                                                <LogoDiscord color={"#00000"} />
                                            </IconButton>
                                        </Stack>
                                        <Stack spacing={3}></Stack>
                                    </Stack>

                                    <Stack spacing={2}>
                                        <Stack>
                                            <Typography level="title-md">
                                                Case ID
                                            </Typography>
                                            <Typography>{caseId}</Typography>
                                        </Stack>
                                        <Divider />
                                        <Stack>
                                            <Typography level="title-md">
                                                Name
                                            </Typography>
                                            <Typography>
                                                {
                                                    rows.find(
                                                        (row) =>
                                                            row.id == caseId,
                                                    ).customer.name
                                                }
                                            </Typography>
                                        </Stack>
                                        <Divider />
                                        <Stack>
                                            <Typography level="title-md">
                                                Platform
                                            </Typography>
                                            <Typography>Discord</Typography>
                                        </Stack>
                                    </Stack>
                                    <Divider />
                                </Stack>

                                <Stack spacing={2} sx={{flexGrow: 1}}>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        spacing={2}
                                    >
                                        <Stack
                                            direction={"row"}
                                            spacing={"1vw"}
                                        ></Stack>

                                        <Stack
                                            direction={"row"}
                                            spacing={"1vw"}
                                        >
                                            <Button
                                                sx={{
                                                    padding: "10px",
                                                }}
                                            >
                                                <Typography
                                                    level="title-md"
                                                    textColor={"white"}
                                                >
                                                    Go to original post
                                                </Typography>
                                            </Button>
                                            <Dropdown>
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
                                                <Menu style={{zIndex: 9999}}>
                                                    <MenuItem color="warning">
                                                        Mute User
                                                    </MenuItem>
                                                    <MenuItem color="danger">
                                                        Ban User
                                                    </MenuItem>
                                                </Menu>
                                            </Dropdown>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={0}>
                                        <CaseDetailsCard
                                            title={"Flagged Content"}
                                            content={`                                            
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum.`}
                                        />
                                    </Stack>
                                    <Stack spacing={0}>
                                        <CaseDetailsCard
                                            title={
                                                "Context - Content is a reply"
                                            }
                                            content={`Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.`}
                                        />
                                    </Stack>
                                    <Stack spacing={0}>
                                        <CaseDetailsCard
                                            title={"AI Comment"}
                                            content={`Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.`}
                                        />
                                    </Stack>
                                    <div>
                                        <CaseDetailsCard>
                                            <Stack spacing={1}>
                                                <Typography level="title-md">
                                                    AI Flags
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
                                                        {[
                                                            "Promotes Terrorism",
                                                            "Offensive Content",
                                                            "Discriminatory",
                                                            "Harmful Content",
                                                            "Unsafe",
                                                            "Potentially Unsafe",
                                                            "Potentially Discriminatory",
                                                            "Potentially Offensive",
                                                            "Potentially Harmful",
                                                        ].map((name) => {
                                                            return (
                                                                <Chip
                                                                    key={name}
                                                                    color="neutral"
                                                                    variant="outlined"
                                                                >
                                                                    {name}
                                                                </Chip>
                                                            );
                                                        })}
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
