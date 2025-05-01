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
    Inventory,
    LocalShipping,
    Assessment,
    GroupWork,
    VerifiedUser,
    Schedule,
    Public,
    Phone,
    Email
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Procurement = () => {
    const theme = useTheme();

    const services = [
        {
            title: "Strategic Sourcing",
            icon: <Inventory fontSize="small" />,
            description: "End-to-end procurement solutions tailored to your project requirements"
        },
        {
            title: "Vendor Management",
            icon: <GroupWork fontSize="small" />,
            description: "Comprehensive vendor qualification and performance monitoring"
        },
        {
            title: "Supply Chain Optimization",
            icon: <LocalShipping fontSize="small" />,
            description: "Logistics and inventory management for efficient operations"
        },
        {
            title: "Tender Management",
            icon: <Assessment fontSize="small" />,
            description: "Complete tender process administration and evaluation"
        },
        {
            title: "Quality Assurance",
            icon: <VerifiedUser fontSize="small" />,
            description: "Rigorous inspection and testing of procured materials"
        },
        {
            title: "Contract Administration",
            icon: <Assessment fontSize="small" />,
            description: "Full lifecycle contract management and compliance"
        }
    ];

    const certifications = [
        "ISO 9001:2015 Certified",
        "ISO 14001:2015 Certified",
        "NDDC Approved Vendor",
        "NOSDRA Certified",
        "NEITI Compliant",
        "FIDIC Certified"
    ];

    return (
        <Box>
            {/* Hero Banner */}
            <Box sx={{
                height: '40vh',
                minHeight: 400,
                backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/procurement-banner.jpg)',
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
                        Procurement Services
                    </Typography>
                    <Typography variant="h4" sx={{ 
                        fontWeight: 400,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)',
                        maxWidth: 800,
                        margin: '0 auto'
                    }}>
                        End-to-end procurement solutions for the energy and marine sectors
                    </Typography>
                </Container>
            </Box>

            {/* Overview Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                            Strategic Supply Chain Solutions
                        </Typography>
                        <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.primary.main, mb: 3 }} />
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                            PROSUB delivers comprehensive procurement services tailored to the oil & gas, marine, and energy sectors. Our strategic approach ensures cost-effective sourcing while maintaining the highest quality standards.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                            With established relationships with global suppliers and local vendors, we optimize your supply chain for efficiency and reliability.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <Button variant="contained" color="primary" size="large">
                                Request Services
                            </Button>
                            <Button variant="outlined" color="primary" size="large">
                                Our Suppliers
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
                            src="/images/procurement-operation.jpg"
                            alt="Procurement Operation"
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
                        Our Procurement Services
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
                                    <VerifiedUser color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Global supplier network with local presence" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <VerifiedUser color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Customized procurement strategies" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <VerifiedUser color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Digital procurement tracking systems" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <VerifiedUser color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Expedited sourcing for critical items" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <VerifiedUser color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Inventory optimization solutions" />
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
                                Our procurement processes comply with international standards including ISO 9001, NEITI requirements, and local content regulations. We maintain rigorous quality control throughout the supply chain.
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
                        Ready to Optimize Your Procurement?
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                        Our procurement specialists are ready to support your supply chain needs
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            startIcon={<Phone />}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Call Procurement Team
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="large"
                            startIcon={<Email />}
                            sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                        >
                            Request Procurement Proposal
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};


export default Procurement;