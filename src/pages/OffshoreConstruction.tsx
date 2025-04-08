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
    Construction,
    Engineering,
    PrecisionManufacturing,
    Cable,
    Anchor,
    Schedule,
    Public,
    Phone,
    Email
  } from '@mui/icons-material';
  import { Link } from 'react-router-dom';
  
  const OffshoreConstruction = () => {
    const theme = useTheme();
  
    const services = [
      {
        title: "Platform Installation",
        icon: <Engineering fontSize="small" />,
        description: "Turnkey installation of fixed and floating offshore platforms"
      },
      {
        title: "Pipeline Construction",
        icon: <Cable fontSize="small" />,
        description: "Engineering, laying and tie-in of subsea pipelines and flowlines"
      },
      {
        title: "Subsea Structure Deployment",
        icon: <PrecisionManufacturing fontSize="small" />,
        description: "Installation of manifolds, jumpers and other subsea equipment"
      },
      {
        title: "Mooring Systems",
        icon: <Anchor fontSize="small" />,
        description: "Design and installation of permanent and temporary mooring systems"
      },
      {
        title: "Riser Systems",
        icon: <Engineering fontSize="small" />,
        description: "Installation of flexible and rigid riser systems"
      },
      {
        title: "Decommissioning",
        icon: <Construction fontSize="small" />,
        description: "Safe removal and disposal of offshore structures"
      }
    ];
  
    const certifications = [
      "API RP2A Compliant",
      "ISO 9001:2015 Certified",
      "DNV GL Approved",
      "NOSDRA Certified",
      "IMCA Member",
      "BSEE Approved Contractor"
    ];
  
    return (
      <Box>
        {/* Hero Banner */}
        <Box sx={{
          height: '40vh',
          minHeight: 400,
          backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/offshore-construction-banner.jpg)',
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
              Offshore Construction
            </Typography>
            <Typography variant="h4" sx={{ 
              fontWeight: 400,
              fontSize: { xs: '1.5rem', md: '2rem' },
              textShadow: '0 1px 5px rgba(0,0,0,0.3)',
              maxWidth: 800,
              margin: '0 auto'
            }}>
              Comprehensive marine construction services for the energy sector
            </Typography>
          </Container>
        </Box>
  
        {/* Overview Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Marine Construction Expertise
              </Typography>
              <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.primary.main, mb: 3 }} />
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                PROSUB delivers complete offshore construction solutions from engineering through installation. Our experienced teams specialize in complex marine projects in West African waters and beyond.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                With in-house engineering capabilities and a modern fleet of construction vessels, we execute projects safely, on time and within budget.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button variant="contained" color="primary" size="large">
                  Request Quote
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  View Our Fleet
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
                src="/images/offshore-construction-operation.jpg"
                alt="Offshore Construction Operation"
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
              Our Construction Services
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
                    <Engineering color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Heavy lift capabilities (up to 1000T)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Engineering color="primary" />
                  </ListItemIcon>
                  <ListItemText primary='Pipeline installation (up to 48" diameter)' />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Engineering color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Platform installation (fixed and floating)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Engineering color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Subsea structure installation (to 3000m)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Engineering color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Diving and ROV support for construction operations" />
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
                  Safety & Quality
                </Typography>
                <Typography variant="body1" paragraph>
                  All construction operations comply with API, ISO, and IMCA standards. Our safety management system maintains a TRIR below industry averages.
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
              Planning an Offshore Construction Project?
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
              Our engineering and construction teams are ready to support your project from concept to completion
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Phone />}
                sx={{ px: 4, py: 1.5 }}
              >
                Call Construction Team
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<Email />}
                sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
              >
                Email Project Proposal
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  
  export default OffshoreConstruction;