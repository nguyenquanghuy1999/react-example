import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { resources } from '../../../config/resources';
import useResourceMutation from '../../../hooks/mutations';
import * as yup from "yup";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function FormModal({ open, onClose, data = {} }) {

    const { resourceKey, isCreate, isEdit, dataEdit } = data;

    const { createResourceMutation, updateResourceMutation } = useResourceMutation(resourceKey);

    const activeResource = resources[resourceKey];

    const fields = activeResource.columns;

    const schema = activeResource.validationSchema ?? yup.object({});

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        const payload = data;
        if (isCreate) {
            createResourceMutation.mutate(payload)
        } else {
            payload.id = dataEdit.id;
            updateResourceMutation.mutate(payload)
        }
        onClose();
    };

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {isCreate && resourceKey.slice(0, -1) + " New"}
                    {isEdit && resourceKey.slice(0, -1) + " Edit"}
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
                                <Fragment key={field}>
                                    <TextField
                                        defaultValue={dataEdit?.[field]}
                                        {...register(field)}
                                        id="outlined-basic"
                                        label={headerName}
                                        variant="outlined"
                                    />
                                    {errors[field] && <Typography sx={{ color: "red" }}>
                                        {errors[field].message}
                                    </Typography>}
                                </ Fragment>
                        })}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit(onSubmit)}>
                        {isCreate ? "Create" : "Update"}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment >
    )
}

export default FormModal;