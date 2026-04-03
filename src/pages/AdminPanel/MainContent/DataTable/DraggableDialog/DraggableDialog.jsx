import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Draggable from 'react-draggable';
import { resources } from '../../../../../config/resources';

function PaperComponent(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable
            nodeRef={nodeRef}
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} ref={nodeRef} />
        </Draggable>
    );
}

function DraggableDialog({ data, open, onClose }) {
    const resource = data.resource;

    const mainResource = resources[resource];

    const delteteResourceMutation = mainResource.delete();

    const handleDelete = () => {
        delteteResourceMutation.mutate({
            id: data.id
        });
        onClose();
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Confirm
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the
                        <Typography
                            variant='caption'
                            sx={{
                                fontWeight: "bold",
                                display: 'inline',
                                fontSize: "17px",
                                m: 0.5
                            }}>
                            {data?.nameDialog}
                        </Typography>
                        information?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color='error'>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default DraggableDialog;