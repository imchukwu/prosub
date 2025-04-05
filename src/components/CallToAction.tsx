// src/components/CallToAction.tsx
import { Box, Typography, Button, Container, useTheme } from '@mui/material';

const CallToAction = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: 8,
      backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.9))',
      color: 'white',
      textAlign: 'center'
    }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontWeight: 'bold',
          mb: 3
        }}>
          Ready to Discuss Your Project?
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Our team is available 24/7 to provide expert consultation and tailored solutions for your oilfield needs.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Contact Us Now
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            size="large"
            sx={{ px: 4, py: 1.5, borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}
          >
            Request a Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;