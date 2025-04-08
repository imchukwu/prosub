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
    ScubaDiving,
    Engineering,
    SafetyCheck,
    Groups,
    Schedule,
    Public,
    Phone,
    Email
  } from '@mui/icons-material';
  import { Link } from 'react-router-dom';
  
  const CommercialDiving = () => {
    const theme = useTheme();
  
    const services = [
      {
        title: "Underwater Inspection",
        icon: <Engineering fontSize="small" />,
        description: "Comprehensive visual and technical inspections of subsea assets"
      },
      {
        title: "Pipeline Maintenance",
        icon: <Engineering fontSize="small" />,
        description: "Repair, modification and maintenance of underwater pipelines"
      },
      {
        title: "Structural Repair",
        icon: <Engineering fontSize="small" />,
        description: "Welding, cutting and fabrication of subsea structures"
      },
      {
        title: "Debris Removal",
        icon: <Engineering fontSize="small" />,
        description: "Clearing of underwater obstructions and debris"
      },
      {
        title: "Salvage Operations",
        icon: <Engineering fontSize="small" />,
        description: "Recovery of sunken equipment and materials"
      },
      {
        title: "Marine Construction",
        icon: <Engineering fontSize="small" />,
        description: "Installation of marine infrastructure and foundations"
      }
    ];
  
    const certifications = [
      "IMCA Certified Diving Team",
      "ADCI Compliant Operations",
      "ISO 9001:2015 Certified",
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
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/diving-banner.jpg)',
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
              Commercial Diving Services
            </Typography>
            <Typography variant="h4" sx={{ 
              fontWeight: 400,
              fontSize: { xs: '1.5rem', md: '2rem' },
              textShadow: '0 1px 5px rgba(0,0,0,0.3)',
              maxWidth: 800,
              margin: '0 auto'
            }}>
              IMCA-certified underwater operations with unmatched safety standards
            </Typography>
          </Container>
        </Box>
  
        {/* Overview Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Professional Underwater Solutions
              </Typography>
              <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.primary.main, mb: 3 }} />
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                PROSUB's commercial diving team delivers comprehensive underwater services for the oil & gas, marine construction, and infrastructure sectors. Our IMCA-certified divers operate with the highest safety standards in the industry.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                With saturation diving capabilities to 300m and mixed gas diving systems, we can handle the most challenging underwater projects in West African waters.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button variant="contained" color="primary" size="large">
                  Request Quote
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Safety Standards
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
                src="/images/diving-operation.jpg"
                alt="Diving Operation"
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
              Our Diving Services
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
                  <ListItemText primary="Saturation diving systems (300msw)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Air & mixed gas diving" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Underwater welding & cutting" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="ROV support diving" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SafetyCheck color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Hyperbaric rescue systems" />
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
                  Safety Standards
                </Typography>
                <Typography variant="body1" paragraph>
                  All diving operations comply with IMCA D014, ADCI Consensus Standards, and Nigerian diving regulations. Our safety record is 100% incident-free since inception.
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
              Ready to Discuss Your Diving Project?
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Our diving supervisors are available 24/7 for emergency response
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Phone />}
                sx={{ px: 4, py: 1.5 }}
              >
                Call Diving Hotline
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<Email />}
                sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
              >
                Email Diving Team
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  
  export default CommercialDiving;