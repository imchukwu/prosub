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
    PrecisionManufacturing,
    Cable,
    SettingsInputComponent,
    Engineering,
    Sensors,
    Phone,
    Email
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const EquipmentRental = () => {
    const theme = useTheme();

    const services = [
        {
            title: "Commercial Diving Equipment",
            icon: <ScubaDiving fontSize="small" />,
            description: "Full range of surface-supplied and saturation diving systems"
        },
        {
            title: "ROV Systems",
            icon: <PrecisionManufacturing fontSize="small" />,
            description: "Work-class and observation-class ROVs with support packages"
        },
        {
            title: "Survey Equipment",
            icon: <Sensors fontSize="small" />,
            description: "Multibeam sonars, USBL systems, and hydrographic sensors"
        },
        {
            title: "Underwater Welding/Cutting",
            icon: <Engineering fontSize="small" />,
            description: "Hyperbaric welding systems and underwater cutting equipment"
        },
        {
            title: "Positioning Systems",
            icon: <SettingsInputComponent fontSize="small" />,
            description: "DGPS, LBL, and acoustic positioning equipment"
        },
        {
            title: "Support Equipment",
            icon: <Cable fontSize="small" />,
            description: "Generators, compressors, and dive control systems"
        }
    ];

    const certifications = [
        "IMCA Certified Equipment",
        "DNV-GL Certified",
        "ISO 9001:2015 Certified",
        "ADCI Compliant",
        "ABS Certified",
        "CE Marked"
    ];

    return (
        <Box>
            {/* Hero Banner */}
            <Box sx={{
                height: '40vh',
                minHeight: 400,
                backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/equipment-banner.jpg)',
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
                        Equipment Rental Services
                    </Typography>
                    <Typography variant="h4" sx={{ 
                        fontWeight: 400,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)',
                        maxWidth: 800,
                        margin: '0 auto'
                    }}>
                        Premium diving, ROV and survey equipment for offshore operations
                    </Typography>
                </Container>
            </Box>

            {/* Overview Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                            Specialized Equipment Solutions
                        </Typography>
                        <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.primary.main, mb: 3 }} />
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                            PROSUB offers comprehensive equipment rental solutions for offshore diving, ROV operations, and hydrographic surveys. Our well-maintained inventory meets the highest industry standards for reliability and performance.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                            With flexible rental terms and complete technical support, we ensure your projects have the right tools without capital investment.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <Button variant="contained" color="primary" size="large">
                                View Equipment List
                            </Button>
                            <Button variant="outlined" color="primary" size="large">
                                Rental Terms
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
                            src="/images/equipment-operation.jpg"
                            alt="ROV Operation"
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
                        Our Equipment Categories
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
                            Equipment Highlights
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Engineering color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="300m saturation diving systems" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Engineering color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="150hp work-class ROVs with tooling packages" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Engineering color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="4000m rated multibeam echosounders" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Engineering color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Hyperbaric welding chambers" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Engineering color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Complete dive control systems" />
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
                                Maintenance Standards
                            </Typography>
                            <Typography variant="body1" paragraph>
                                All equipment undergoes rigorous inspection and maintenance according to manufacturer specifications and IMCA guidelines. Our certified technicians ensure optimal performance.
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
                        Need Specialized Equipment?
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                        Our rental team is ready to support your offshore operations
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            startIcon={<Phone />}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Call Rental Team
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="large"
                            startIcon={<Email />}
                            sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                        >
                            Request Equipment List
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default EquipmentRental;