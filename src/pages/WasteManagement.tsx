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
    Recycling,
    OilBarrel,
    Dangerous, // Changed from HazardousMaterials
    WaterDrop,
    Factory,
    Science,
    Phone,
    Email
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const WasteManagement = () => {
    const theme = useTheme();

    const services = [
        {
            title: "Drill Cuttings Treatment",
            icon: <OilBarrel fontSize="small" />,
            description: "Advanced treatment and disposal of oil-based drill cuttings"
        },
        {
            title: "Produced Water Management",
            icon: <WaterDrop fontSize="small" />,
            description: "Treatment and disposal of offshore produced water"
        },
        {
            title: "Hazardous Waste Disposal",
            icon: <Dangerous fontSize="small" />,
            description: "Safe handling and disposal of hazardous offshore waste"
        },
        {
            title: "Solid Waste Processing",
            icon: <Factory fontSize="small" />,
            description: "Processing and recycling of non-hazardous solid waste"
        },
        {
            title: "Sludge Treatment",
            icon: <Science fontSize="small" />,
            description: "Dehydration and treatment of oil sludge and tank bottoms"
        },
        {
            title: "Waste Recycling",
            icon: <Recycling fontSize="small" />,
            description: "Sustainable recycling solutions for offshore waste streams"
        }
    ];

    const certifications = [
        "ISO 14001:2015 Certified",
        "IMO MARPOL Compliant",
        "NOSDRA Approved",
        "OPRC Certified",
        "DPR Licensed",
        "OSPAR Compliant"
    ];

    return (
        <Box>
            {/* Hero Banner */}
            <Box sx={{
                height: '40vh',
                minHeight: 400,
                backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/waste-management-banner.jpg)',
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
                        Drilling & Offshore Waste Management
                    </Typography>
                    <Typography variant="h4" sx={{ 
                        fontWeight: 400,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)',
                        maxWidth: 800,
                        margin: '0 auto'
                    }}>
                        Comprehensive waste solutions compliant with international regulations
                    </Typography>
                </Container>
            </Box>

            {/* Overview Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                            Sustainable Waste Solutions
                        </Typography>
                        <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.primary.main, mb: 3 }} />
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                            PROSUB provides complete drilling waste and offshore waste management services, ensuring regulatory compliance while maximizing recycling and recovery opportunities.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                            Our specialized treatment facilities and offshore equipment handle all waste streams including drill cuttings, produced water, slop waste, and hazardous materials.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <Button variant="contained" color="primary" size="large">
                                Request Services
                            </Button>
                            <Button variant="outlined" color="primary" size="large">
                                Compliance Guide
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
                            src="/images/waste-treatment-facility.jpg"
                            alt="Waste Treatment Facility"
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
                        Our Waste Management Services
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
                                    <Recycling color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Thermal desorption units for cuttings treatment" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Recycling color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="20,000 bbl/day produced water treatment capacity" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Recycling color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Offshore waste processing units" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Recycling color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Hazardous waste incineration facilities" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Recycling color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Waste analytics and characterization lab" />
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
                                Environmental Standards
                            </Typography>
                            <Typography variant="body1" paragraph>
                                All waste management operations comply with MARPOL, OSPAR, NOSDRA, and DPR regulations. We implement best available techniques to minimize environmental impact.
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
                        Need Waste Management Solutions?
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                        Our environmental specialists are ready to optimize your waste streams
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            startIcon={<Phone />}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Contact Waste Team
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="large"
                            startIcon={<Email />}
                            sx={{ px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                        >
                            Request Waste Audit
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default WasteManagement; // This is the export that makes it a module