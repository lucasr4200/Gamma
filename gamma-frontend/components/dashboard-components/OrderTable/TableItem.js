import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

import Link from "next/link";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import StatusChip from "../StatusChip";
import {useRouter} from "next/router";
import {Chip} from "@mui/joy";

export default function TableItem({row, selected, setSelected, data}) {
    const router = useRouter();
    const query = router.query;
    const statusFilter = router.query.statusFilter;
    const platformFilter = router.query.platformFilter;

    if (statusFilter != null && platformFilter != null) {
        if (statusFilter != "all") {
            if (data.status.toLowerCase() != statusFilter.toLowerCase()) {
                return <tr></tr>;
            }
        }
        if (platformFilter != "all") {
            if (data.platform.toLowerCase() != platformFilter.toLowerCase()) {
                return <tr></tr>;
            }
        }
    } else {
        return <tr></tr>;
    }

    return (
        <tr key={data.case_id}>
            <td>
                <Box />
            </td>
            <td>
                <Chip color="primary">
                    <Typography level="body-xs">{data.case_id}</Typography>
                </Chip>
            </td>
            <td>
                <Chip color="primary">
                    <Typography level="body-xs">{data.date}</Typography>
                </Chip>
            </td>
            <td>
                <StatusChip status={data.status} />
            </td>
            <td>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                    }}
                >
                    <Avatar size="sm"></Avatar>
                    <div>
                        <Typography level="body-xs">{data.offender}</Typography>
                        <Typography level="body-xs">{data.platform}</Typography>
                    </div>
                </Box>
            </td>
            <td>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Link
                            level="body-xs"
                            component="button"
                            href={{
                                query: {
                                    ...query,
                                    caseId: data.case_id.toString(),
                                },
                            }}
                            as={"/"}
                        >
                            <Button
                                color="neutral"
                                size="sm"
                                variant="outlined"
                            >
                                View
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </td>
        </tr>
    );
}
