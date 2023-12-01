import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  CssBaseline,
  makeStyles,
  Theme  
} from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'url("https://4kwallpapers.com/images/walls/thumbs_3t/8228.jpg")', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    borderRadius: 2,
    boxShadow: theme.shadows[4],
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Make the card background transparent
    padding: theme.spacing(4), 
  },
}));

function MyLogin() {
  const classes = useStyles(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Check credentials
    // Log the email and password
    console.log(`Email: ${email}, Password: ${password}`);

    // If authentication is successful, navigate to the dashboard
    if (email === 'admin@gmail.com' && password === 'admin') {
      navigate('/Dashboard');
    }
  };

  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <CssBaseline /> {/* Add CssBaseline to reset default styles */}
      <Paper
        elevation={4}
        component={Box}
        p={4}
        className={classes.paper}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default MyLogin;
