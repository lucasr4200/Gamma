import * as React from "react";

import Sheet from "@mui/joy/Sheet";

export default function TableContainer({children}) {
    return (
        <Sheet
            className="OrderTableContainer"
            variant="outlined"
            sx={{...styles.table, maxHeight: "75vh"}}
        >
            {children}
        </Sheet>
    );
}
const styles = {
    table: {
        "--TableCell-headBackground": "var(--joy-palette-background-level1)",
        "--Table-headerUnderlineThickness": "1px",
        "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
        "--TableCell-paddingY": "4px",
        "--TableCell-paddingX": "8px",
    },
};
