import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';

import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { resources } from '../../../config/resources';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function FormModal({ open, onClose, data = {} }) {
    const { item, isCreate, isEdit, dataEdit } = data;

    const resource = item.toLowerCase();

    const mainResource = resources[resource];

    const createResourceMutation = mainResource.create();
    const updateResourceMutation = mainResource.update();

    const fields = resources[resource].columns;

    const getInitialInputValue = () => {
        if (isEdit) {
            return dataEdit;
        } else {
            return fields.reduce((obj, { field }) => {
                if (field !== "id") {
                    obj[field] = "";
                };
                return obj;
            }, {})
        }
    }

    const [inputValue, setInputValue] = useState(getInitialInputValue);

    const handleButtonSubmit = () => {
        
        const payload = fields.reduce((obj, { field }) => {
            obj[field] = inputValue[field];
            return obj;
        }, {});

        if (isCreate) {
            createResourceMutation.mutate(payload)
        } else {
            payload.id = inputValue.id;
            updateResourceMutation.mutate(payload)
        }

        onClose();
    }

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {isCreate && item.slice(0, -1) + " New"}
                    {isEdit && item.slice(0, -1) + " Edit"}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
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
                        {fields.map(({ field, headerName }) => {
                            return headerName == "Id" ? null :
                                <TextField
                                    key={field}
                                    value={inputValue[field]}
                                    onChange={(e) => setInputValue(prev => ({ ...prev, [field]: e.target.value }))
                                    }
                                    id="outlined-basic"
                                    label={headerName}
                                    variant="outlined"
                                />
                        })}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleButtonSubmit}>
                        {isCreate ? "Create" : "Update"}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment >
    )
}

export default FormModal;