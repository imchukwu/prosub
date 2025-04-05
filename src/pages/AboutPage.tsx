import { Box, Typography, Button, Container } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Professional Oilfield Services
        </Typography>
        <Typography variant="h5" gutterBottom>
          Innovative solutions for the energy sector
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3 }}>
          Explore Our Services
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;