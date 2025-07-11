"use client"


import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';

export default function MUIFormComponent() {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    email: ''
  });

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { name: '', contact: '', email: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!contact.trim()) {
      newErrors.contact = 'Contact number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = 'Contact number must be 10 digits';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!email.includes('@')) {
      newErrors.email = 'Email must be valid';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      

      setName('');
      setContact('');
      setEmail('');
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText={errors.name}
          />

          <TextField
            label="Contact Number"
            fullWidth
            margin="normal"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            helperText={errors.contact}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={errors.email}
          />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}