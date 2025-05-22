import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const InsertStock: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Insert New Stock Item
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            variant="outlined"
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            type="number"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '1rem' }}
          >
            Insert Item
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default InsertStock;
