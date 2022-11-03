import React from 'react';
import './DialogModal.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DialodModal = () => {
  return (
    <div>
      <Dialog open={true}>
          <DialogTitle className='dialog__title'>Add new Todo</DialogTitle>

          <DialogContent>
              <form onSubmit={()=>{}} className='dialog-form'>
                  <TextField
                      className='dialog_input'
                      label='Todo'
                      variant='outlined'
                      onChange={(e)=>{}}
                      value=''
                      margin='normal'
                  />
                  <TextField
                      className='dialog_input'
                      label='Note'
                      variant='outlined'
                      onChange={(e)=>{}}
                      value=''
                      multiline={true}
                      minRows={4}
                      margin='normal'
                  />
                  <DialogActions>
                      <Button type='submit' onClick={()=>{}} variant="contained" color='primary' disabled={false}>Add</Button>
                      <Button onClick={()=>{}} variant="contained" color='primary'>Close</Button>
                  </DialogActions>
              </form>
          </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialodModal;
