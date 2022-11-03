import React from 'react';
import './DisplayTodo.css';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const DisplayTodo = ({
                         isOpen,
                         formData,
                         handleCloseButton,
                         handleEditTodo,
                         handleRemoveTodo
                     }) => {
    console.log(isOpen)
    return (
        <div>
            <Dialog open={isOpen} onClose={handleCloseButton}>
                <DialogTitle className='display__title'><h2>{formData.todoName}</h2></DialogTitle>
                <hr/>
                <DialogContent>
                    <div className='display__content'>
                        <div>{formData.todoNote}</div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className='display__btn'>
                        <div className='btn__remove'>
                            <Button variant="contained" color='error' onClick={handleRemoveTodo}>Remove</Button>
                        </div>
                        <div className='btn__edite-close'>
                            <div className='btn__edite'>
                                <Button  onClick={handleEditTodo} variant="contained"
                                        color='primary'>Edit</Button>
                            </div>
                            <div className='btn__close'>
                                <Button  onClick={handleCloseButton} variant="contained"
                                        color='primary'>Close</Button>
                            </div>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    )
        ;
};

export default DisplayTodo;
