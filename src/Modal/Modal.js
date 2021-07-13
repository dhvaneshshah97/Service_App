import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { data } from '../data';
import { FormControl, FormLabel, Input, InputLabel, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const AnimatedModal = ({ id, name, email, desc }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Update
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form>
                            <div>
                                <FormControl>
                                    <InputLabel>ID</InputLabel>
                                    <Input value={id} ></Input>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl>
                                    <InputLabel>Name</InputLabel>
                                    <Input defaultValue={name} />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl>
                                    <InputLabel>Email</InputLabel>
                                    <Input defaultValue={email} />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl>
                                    <InputLabel>Description</InputLabel>
                                    <Input defaultValue={desc} />
                                </FormControl>
                            </div>

                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default AnimatedModal;