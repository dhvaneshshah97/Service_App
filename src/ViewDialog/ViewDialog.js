import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { TextField } from '@material-ui/core';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const ViewDialog = ({ id, name, email, desc, action }) => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        name, email, desc
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const [id, value] = event.target;
        setValues({...values, [id]: value})
    }

    return (
        <>
            <Button variant="outlined" color={action === 'update' ? 'inherit' : 'primary'} onClick={handleClickOpen} size="small">
                {action === 'update' ? 'update' : 'view'}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {name}
                </DialogTitle>
                <DialogContent>

                    <DialogContentText>
                        ID: {id}
                    </DialogContentText>

                    {
                        action === 'view' ? <DialogContentText>
                            Name: {name}
                        </DialogContentText> : <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            defaultValue={name}
                            value={values.name}
                            onChange={handleChange}
                        />
                    }

                    {
                        action === 'view' ? <DialogContentText>
                            Email: {email}
                        </DialogContentText> :
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                fullWidth
                                defaultValue={email}
                                value={values.email}
                                onChange={handleChange}
                            />
                    }

                    {
                        action === 'view' ? <DialogContentText>
                            Description: {desc}
                        </DialogContentText> :
                            <TextField
                                autoFocus
                                margin="dense"
                                id="desc"
                                label="Description"
                                fullWidth
                                defaultValue={desc}
                                value={values.desc}
                                onChange={handleChange}
                            />
                    }


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ViewDialog;