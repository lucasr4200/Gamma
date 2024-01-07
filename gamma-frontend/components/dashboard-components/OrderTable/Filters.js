import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import {LogoDiscord, LogoReddit, LogoTwitter} from "react-ionicons";
import {useRouter} from "next/router";

export default function Filters({setCurrentPage}) {
    const router = useRouter();

    React.useEffect(() => {
        router.push(
            {
                query: {statusFilter: "all", platformFilter: "all"},
            },
            "/",
        );
    }, []);

    function handlePlatformFilterChange(event, newValue) {
        setCurrentPage(1);
        router.push(
            {
                query: {
                    statusFilter: router.query.statusFilter,
                    platformFilter: newValue,
                },
            },
            "/",
        );
    }
    function handleStatusFilterChange(event, newValue) {
        setCurrentPage(1);
        router.push(
            {
                query: {
                    statusFilter: newValue,
                    platformFilter: router.query.platformFilter,
                },
            },
            "/",
        );
    }

    return (
        <React.Fragment>
            <FormControl size="sm">
                <FormLabel>Status</FormLabel>
                <Select
                    size="sm"
                    placeholder="Filter by status"
                    slotProps={{button: {sx: {whiteSpace: "nowrap"}}}}
                    onChange={handleStatusFilterChange}
                >
                    <Option value="all">All</Option>
                    <Option value="resolved">Resolved</Option>
                    <Option value="unreviewed">Unreviewed</Option>
                    <Option value="further action needed">
                        Further Action Needed
                    </Option>
                </Select>
            </FormControl>
            <FormControl size="sm">
                <FormLabel>Platform</FormLabel>
                <Select
                    size="sm"
                    placeholder="All"
                    onChange={handlePlatformFilterChange}
                >
                    <Option value="all">All</Option>
                    <Option value="Discord">
                        Discord
                        <LogoDiscord color={"#00000"} />
                    </Option>
                    <Option value="Reddit">
                        Reddit
                        <LogoReddit color={"#00000"} />
                    </Option>
                    <Option value="X">
                        X (Formerly Twitter)
                        <LogoTwitter color={"#00000"} />
                    </Option>
                </Select>
            </FormControl>
        </React.Fragment>
    );
}
