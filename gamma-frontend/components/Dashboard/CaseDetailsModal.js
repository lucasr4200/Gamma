import React from "react";
import {useRouter} from "next/router";
import Modal from "@mui/joy/Modal";
import {ModalDialog, Typography, ModalClose} from "@mui/joy";

export default function CaseDetailsModal() {
    const router = useRouter();

    function handleModalClose() {
        router.push("/");
    }
    const caseId = router.query.caseId;

    return (
        <>
            {router.query.caseId && (
                <Modal open onClose={handleModalClose}>
                    <ModalDialog
                        color="primary"
                        layout="center"
                        size="lg"
                        variant="plain"
                    >
                        <ModalClose />
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={1}
                        >
                            Details about order #{caseId}
                        </Typography>
                        <Typography id="modal-desc" textColor="text.tertiary">
                            Make sure to use <code>aria-labelledby</code> on the
                            modal dialog with an optional{" "}
                            <code>aria-describedby</code> attribute.
                        </Typography>
                    </ModalDialog>
                </Modal>
            )}
        </>
    );
}
