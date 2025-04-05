// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none'
            }}
          >
            PROSUB Firm
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button component={Link} to="/about" color="inherit" sx={{ color: 'text.primary' }}>
              About
            </Button>
            <Button component={Link} to="/services" color="inherit" sx={{ color: 'text.primary' }}>
              Services
            </Button>
            <Button component={Link} to="/projects" color="inherit" sx={{ color: 'text.primary' }}>
              Projects
            </Button>
            <Button component={Link} to="/equipment" color="inherit" sx={{ color: 'text.primary' }}>
              Equipment
            </Button>
            <Button component={Link} to="/hse" color="inherit" sx={{ color: 'text.primary' }}>
              HSE
            </Button>
            <Button component={Link} to="/contact" color="primary" variant="contained">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;