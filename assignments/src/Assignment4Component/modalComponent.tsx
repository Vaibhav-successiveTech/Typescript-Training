"use client"

import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField
} from '@mui/material';

export default function ModalComponent() {
  const [isopen, setIsOpen] = useState(false); 
  const [input, setInput] = useState('');  

  const Open = () => setIsOpen(true);  
  const Close = () => setIsOpen(false);

  const handleSubmit = () => {

    Close();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Button variant="contained" onClick={Open}>
        Open Modal
      </Button>

      <Dialog open={isopen} onClose={Close}>
        <DialogTitle>Enter Information</DialogTitle>

        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Please enter your name below:
          </Typography>
          <TextField
            label="Your Name"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            margin="dense"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={Close}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}