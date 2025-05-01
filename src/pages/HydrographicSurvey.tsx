import { 
    Box, 
    Typography, 
    Container, 
    Stack, 
    Card, 
    Button, 
    useTheme,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    Chip,
    ListItemText
  } from '@mui/material';
  import { 
    Engineering,
    Map,
    PrecisionManufacturing,
    SafetyCheck,
    Groups,
    Schedule,
    Public,
    Phone,
    Email
  } from '@mui/icons-material';
  import { Link } from 'react-router-dom';
  
  const HydrographicSurvey = () => {
    const theme = useTheme();
  
    const services = [
      {
        title: "High-Precision Bathymetry",
        icon: <Map fontSize="small" />,
        description: "Detailed seafloor mapping with multibeam and singlebeam echosounders"
      },
      {
        title: "Hydrographic Positioning",
        icon: <PrecisionManufacturing fontSize="small" />,
        description: "Ultra-precise positioning services for offshore operations"
      },
      {
        title: "Subsea Pipeline Survey",
        icon: <Engineering fontSize="small" />,
        description: "Comprehensive pipeline route surveys and inspection"
      },
      {
        title: "Port and Harbor Mapping",
        icon: <Map fontSize="small" />,
        description: "Detailed bathymetric surveys for port development and maintenance"
      },
      {
        title: "Offshore Construction Support",
        icon: <Engineering fontSize="small" />,
        description: "Real-time positioning for installation and construction projects"
      },
      {
        title: "Environmental Baseline Surveys",
        icon: <Map fontSize="small" />,
        description: "Pre-development seabed surveys for environmental impact assessments"
      }
    ];
  
    const certifications = [
      "IHO Cat A & B Certified",
      "ISO 9001:2015 Certified",
      "IMCA Certified Survey Team",
      "NDDC Approved Vendor",
      "NOSDRA Certified",
      "DOT Certified"
    ];
  
    return (
      <Box>
        {/* Hero Banner */}
        <Box sx={{
          height: '40vh',
          minHeight: 400,
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/survey-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
            zIndex: 1
          }
        }}>
          <Container sx={{ 
            maxWidth: 'lg',
            position: 'relative',
            zIndex: 2 
          }}>
            <Typography variant="h1" sx={{ 
              fontWeight: 800, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              Hydrographic Positioning & Bathymetric Survey
            </Typography>
            <Typography variant="h4" sx={{ 
              fontWeight: 400,
              fontSize: { xs: '1.5rem', md: '2rem' },
              textShadow: '0 1px 5px rgba(0,0,0,0.3)',
              maxWidth: 800,
              margin: '0 auto'
            }}>
              IHO-compliant hydrographic services with centimeter-level accuracy
            </Typography>
          </Container>
        </Box>
  
        {/* Overview Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Precision Hydrographic Solutions
              </Typography>
              <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.primary.main, mb: 3 }} />
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                PROSUB delivers comprehensive hydrographic survey services for offshore oil & gas, marine construction, and coastal development projects. Our IHO-certified survey teams utilize state-of-the-art equipment to deliver accurate seabed mapping and positioning data.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                With multibeam echosounders, high-precision GNSS systems, and advanced data processing software, we provide the most reliable hydrographic data for your marine projects.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button variant="contained" color="primary" size="large">
                  Request Quote
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Survey Standards
                </Button>
              </Box>
            </Box>
            <Box sx={{ 
              width: { xs: '100%', md: '50%' },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3
            }}>
              <Box
                component="img"
                src="/images/survey-operation.jpg"
                alt="Survey Operation"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)'
                  }
                }}
              />
            </Box>
          </Stack>
        </Container>
  
        {/* Services Section */}
        <Box sx={{ backgroundColor: theme.palette.grey[100], py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom sx={{ 
              fontWeight: 700,
              mb: 6,
              position: 'relative',
              '&:after': {
                content: '""',
                display: 'block',
                width: 80,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                margin: '20px auto 0'
              }
            }}>
              Our Survey Services
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center'
            }}>
              {services.map((service, index) => (
                <Card key={index} sx={{ 
                  width: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(33.333% - 32px)' },
                  p: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6]
                  }
                }}>
                  <Box sx={{ 
                    fontSize: '2.5rem',
                    color: theme.palette.primary.main,
                    mb: 2
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1">
                    {service.description}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
  
        {/* Capabilities Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Technical Capabilities
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Multibeam echosounders (up to 4000m depth)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="RTK GNSS positioning (cm-level accuracy)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Sub-bottom profilers for geological surveys" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="USBL/LBL positioning systems" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Motion reference units for vessel stabilization" />
                </ListItem>
              </List>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Certifications
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {certifications.map((cert, index) => (
                  <Chip 
                    key={index}
                    label={cert}
                    color="primary"
                    variant="outlined"
                    sx={{ 
                      borderRadius: 1,
                      borderWidth: 2,
                      fontSize: '0.9rem',
                      padding: 1
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Quality Standards
                </Typography>
                <Typography variant="body1" paragraph>
                  All surveys comply with IHO S-44 standards, IMCA survey guidelines, and Nigerian hydrographic regulations. Our quality control procedures ensure data accuracy and reliability.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
  
        {/* CTA Section */}
        <Box sx={{ 
          backgroundColor: theme.palette.primary.dark,
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}>
          <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Need Precise Hydrographic Data?
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Our survey teams are ready to support your offshore projects
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Phone />}
                sx={{ px: 4, py: 1.5 }}
              >
                Call Survey Team
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<Email />}
                sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
              >
                Request Survey Proposal
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  

  export default HydrographicSurvey;