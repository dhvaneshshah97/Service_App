import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { TextField } from '@material-ui/core';

interface Props {
    id: number,
    name: string,
    email: string,
    desc: string,
    action: string,
    makeComponentUpdate: Function,
}

function PaperComponent(props: JSX.IntrinsicAttributes & PaperProps) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const ViewDialog = ({ id, name, email, desc, action, makeComponentUpdate }: Props): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        id, name, email, desc
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [name]: value });
    }

    const handleUpdate = () => {
        let serviceData = JSON.parse(localStorage.getItem('data') || '');
        let idx = serviceData.findIndex((o:{ID:number}) => o.ID === id);
        serviceData[idx].Name = values.name;
        serviceData[idx].Email = values.email;
        serviceData[idx].Description = values.desc;
        localStorage.setItem('data', JSON.stringify(serviceData));
        makeComponentUpdate();
        setOpen(false);
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
                            name="name"
                            label="Name"
                            fullWidth
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
                                name="email"
                                label="Email"
                                fullWidth
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
                                name="desc"
                                label="Description"
                                fullWidth
                                value={values.desc}
                                onChange={handleChange}
                                multiline
                                rows={2}
                                maxRows={Infinity}
                            />
                    }


                </DialogContent>
                <DialogActions>
                    {action === 'view' && <Button onClick={handleClose} color="primary">
                        Done
                    </Button>
                    }
                    {
                        action === 'update' && <Button onClick={handleUpdate} color="primary">
                            Update
                        </Button>
                    }


                </DialogActions>
            </Dialog>
        </>
    );
}

export default ViewDialog;