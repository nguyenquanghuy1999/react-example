import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useCreatePost, useUpdatePost } from "../../hooks/mutations/post"

import Dialog from '@mui/material/Dialog';

import { styled } from '@mui/material/styles';
import React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function FormModal({ open, close, data, setData }) {

    const { id, inputDesc, inputTitle, title, isCreate, isEdit } = data;


    const addPostMutation = useCreatePost();


    const updatePostMutation = useUpdatePost();

    const handleClose = () => {
        setData(prev => ({ ...prev, inputTitle: "", inputDesc: "" }))
        close();
    }

    const handleButtonSubmit = () => {
        if (isCreate) {
            addPostMutation.mutate({
                title: inputTitle,
                description: inputDesc
            })
        } else {
            updatePostMutation.mutate({
                id: id,
                title: inputTitle,
                description: inputDesc

            })
        }
        handleClose();
    }

    console.log("FormModal");


    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {isCreate && title.slice(0, -1) + " New"}
                    {isEdit && title.slice(0, -1) + " Edit"}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Box
                        component="form"
                        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "400px", height: "200px" }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            value={inputTitle}
                            onChange={(e) => setData(prev => ({ ...prev, inputTitle: e.target.value }))}
                            id="outlined-basic"
                            label="Title"
                            variant="outlined" />
                        <TextField
                            value={inputDesc}
                            onChange={e => setData(prev => ({ ...prev, inputDesc: e.target.value }))}
                            id="filled-basic"
                            label="Description"
                            variant="outlined" />

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleButtonSubmit}>
                        {isCreate && "Create"}
                        {isEdit && "Update"}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    )
}