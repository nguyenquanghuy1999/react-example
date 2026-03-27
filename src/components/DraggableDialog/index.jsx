import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Typography from '@mui/material/Typography';
import { useDeletePost } from '../../hooks/mutations/post';

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

export default function DraggableDialog({ data, open, onClose }) {

    const deletePostMutation = useDeletePost();

    const handleDelete = () => {
        deletePostMutation.mutate({
            id: data.id
        });
        onClose();
    }

    console.log("DraggableDialog");

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open draggable dialog
            </Button> */}
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
                            sx={{
                                fontWeight: "bold",
                                display: 'inline',
                                m: 0.5
                            }}>
                            {data?.title}
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
