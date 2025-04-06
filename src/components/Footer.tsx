// src/components/Footer.tsx
import { Box, Typography, Link, Divider, useTheme, Container, Stack } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      backgroundColor: theme.palette.grey[900],
      color: 'white',
      py: 6,
      px: 2
    }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 4, md: 8 }}
          divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: theme.palette.grey[700] }} />}
        >
          {/* Company Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              PROSUB NIGERIA LTD
            </Typography>
            <Typography variant="body1" paragraph>
              Indigenous diving and marine contracting firm providing technical services in underwater engineering, marine transportation, and offshore construction.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} PROSUB NIGERIA LTD. All rights reserved.
            </Typography>
          </Box>
          
          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
              <LocationOn color="primary" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1">Head Office:</Typography>
                <Typography variant="body2">
                  Plot 245/245 Futo Housing Estate, Obinze, Owerri North, Imo State
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>Branch Office:</Typography>
                <Typography variant="body2">
                  House 1, Opposite Abass Olusuga Avenue, Ire 1 Agufoye Igbogbo, Ikorodu, Lagos State
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Phone color="primary" />
              <Typography>+234 703 467 4326</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Email color="primary" />
              <Typography>Info@prosubng.com</Typography>
            </Box>
          </Box>
          
          {/* Certifications */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Certifications
            </Typography>
            <Typography variant="body2" paragraph>
              • NIS ISO 9001:2015 Certified
            </Typography>
            <Typography variant="body2" paragraph>
              • IMCA Member (Diving & ROV Divisions)
            </Typography>
            <Typography variant="body2" paragraph>
              • ISO 45001 Certification in Progress
            </Typography>
            <Typography variant="body2" paragraph sx={{ mt: 2 }}>
              Website: www.prosubng.com
            </Typography>
          </Box>
        </Stack>
        
        <Divider sx={{ my: 4, backgroundColor: theme.palette.grey[700] }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            Committed to Local Content Development • Strong HSE Culture • Community Social Responsibility
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;