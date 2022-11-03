import React from 'react';
import './DialogModal.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const DialodModal = ({
                         isOpen,
                         handlerOpenDialogs,
                         handleSetFieldValue,
                         formData,
                         handleSetTodoOnSubmit
                     }) => {
    return (
        <div>
            <Dialog open={isOpen} onClose={handlerOpenDialogs}>
                <DialogTitle className='dialog__title'>{formData.isEdit ? 'Edit Todo': 'Add Todo'}</DialogTitle>

                <DialogContent>
                    <form onSubmit={handleSetTodoOnSubmit} className='dialog-form'>
                        <TextField
                            className='dialog_input'
                            label='Todo'
                            variant='outlined'
                            onChange={(e) => {handleSetFieldValue('todoName',e.target.value)}}
                            value={formData.todoName}
                            margin='normal'
                        />
                        <TextField
                            className='dialog_input'
                            label='Note'
                            variant='outlined'
                            onChange={(e) => {handleSetFieldValue('todoNote',e.target.value)}}
                            value={formData.todoNote}
                            multiline={true}
                            minRows={4}
                            margin='normal'
                        />
                        <DialogActions>
                            <Button
                                type='submit'
                                variant="contained"
                                color='primary'
                                disabled={!formData.todoName}

                            >{formData.isEdit ? 'Edit': 'Add'}</Button>
                            <Button
                                onClick={handlerOpenDialogs}
                                variant="contained"
                                color='primary'>Close</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DialodModal;
