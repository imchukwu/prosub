// src/components/CompanyOverview.tsx
import { Box, Typography, Button, useTheme, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const CompanyOverview = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8, px: { xs: 3, md: 4 } }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 4, md: 8 },
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        p: { xs: 3, md: 6 },
        boxShadow: theme.shadows[2],
        '&:hover': {
          boxShadow: theme.shadows[6],
          transition: 'box-shadow 0.3s ease'
        }
      }}>
        {/* Image Column - Enhanced with overlay effect */}
        <Box sx={{
          position: 'relative',
          width: { xs: '100%', lg: '50%' },
          minHeight: { xs: 300, md: 400 },
          borderRadius: 3,
          overflow: 'hidden'
        }}>
          <Box
            component="img"
            src="/images/company-overview.jpg"
            alt="Our oil servicing team"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
            color: 'white'
          }}>
            <Typography variant="h6">Trusted Since 1998</Typography>
            <Typography variant="body2">20+ Years of Industry Excellence</Typography>
          </Box>
        </Box>

        {/* Content Column - Improved typography and spacing */}
        <Box sx={{ 
          width: { xs: '100%', lg: '50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography variant="overline" color="primary" sx={{ mb: 1 }}>
            ABOUT OUR COMPANY
          </Typography>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.2,
            color: theme.palette.text.primary
          }}>
            Delivering <Box component="span" sx={{ color: theme.palette.primary.main }}>Reliable</Box> Oilfield Solutions
          </Typography>
          
          <Box sx={{ 
            mb: 4,
            '& p': { 
              mb: 2,
              lineHeight: 1.8 
            }
          }}>
            <Typography>
              With over two decades of operational excellence, we specialize in providing comprehensive oilfield services across West Africa.
            </Typography>
            <Typography>
              Our certified team combines technical expertise with innovative solutions to ensure operational efficiency while maintaining the highest safety and environmental standards.
            </Typography>
            <Typography>
              We pride ourselves on delivering tailored solutions that address the unique challenges of both onshore and offshore operations.
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mt: 2
          }}>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              size="large"
              color="primary"
              sx={{
                px: 4,
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}
            >
              Learn More About Us
            </Button>
            <Button
              component={Link}
              to="/services"
              variant="outlined"
              size="large"
              color="primary"
              sx={{
                px: 4,
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}
            >
              Our Services
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CompanyOverview;