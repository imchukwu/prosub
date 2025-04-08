import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Tabs,
  Tab
} from "@mui/material";
import {
  DirectionsBoat,
  Engineering,
  PrecisionManufacturing,
  Cable,
  Construction,
  Assessment,
  Anchor,
  Radar,
  Support,
  Schedule,
  Phone,
  Email
} from "@mui/icons-material";
import { useState } from "react";

// EquipmentCard Component with TypeScript types
interface EquipmentCardProps {
  name: string;
  type: string;
  specifications: string[];
  capabilities: string[];
  image: string;
}

// Equipment Banner Section
const EquipmentBanner = () => {
  const theme = useTheme();
  
  return (
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
          Our Equipment
        </Typography>
        <Typography variant="h4" sx={{ 
          fontWeight: 400,
          fontSize: { xs: '1.5rem', md: '2rem' },
          textShadow: '0 1px 5px rgba(0,0,0,0.3)',
          maxWidth: 800,
          margin: '0 auto'
        }}>
          State-of-the-art marine and subsea equipment for complex offshore operations
        </Typography>
      </Container>
    </Box>
  );
};

// EquipmentCard Component
const EquipmentCard = ({ name, type, specifications, capabilities, image }: EquipmentCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip 
          label={type} 
          color="primary" 
          size="small"
          sx={{ mb: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        
        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
          Key Specifications:
        </Typography>
        <List dense>
          {specifications.map((spec, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PrecisionManufacturing fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary={spec} />
            </ListItem>
          ))}
        </List>

        <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
          Capabilities:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1 }}>
          {capabilities.map((capability, index) => (
            <Chip 
              key={index}
              label={capability}
              color="secondary"
              size="small"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          fullWidth
          endIcon={<Engineering />}
        >
          Technical Details
        </Button>
      </Box>
    </Card>
  );
};

// Equipment Page Component
const EquipmentPage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const vesselEquipment = [
    {
      name: "MV PROSUB Pioneer",
      type: "Diving Support Vessel",
      specifications: [
        "Length: 65m",
        "Bollard Pull: 80T",
        "Dynamic Positioning: DP2",
        "Accommodation: 60 personnel"
      ],
      capabilities: [
        "Saturation Diving",
        "ROV Operations",
        "Crane Operations",
        "Diving Support"
      ],
      image: "/images/vessel-dsv.jpg"
    },
    {
      name: "MV PROSUB Constructor",
      type: "Construction Support Vessel",
      specifications: [
        "Length: 75m",
        "Deck Space: 800m²",
        "Dynamic Positioning: DP2",
        "Crane Capacity: 250T"
      ],
      capabilities: [
        "Pipeline Installation",
        "Subsea Construction",
        "Heavy Lifting",
        "Platform Support"
      ],
      image: "/images/vessel-csv.jpg"
    }
  ];

  const divingEquipment = [
    {
      name: "Saturation Diving System",
      type: "Diving Equipment",
      specifications: [
        "Depth Rating: 300m",
        "Chambers: 6-man living + 2-man bell",
        "Deployment System: Launch & Recovery",
        "Gas Storage: Mixed gas capability"
      ],
      capabilities: [
        "Deepwater Construction",
        "Pipeline Repair",
        "Hyperbaric Welding",
        "Long-duration Dives"
      ],
      image: "/images/equip-saturation.jpg"
    },
    {
      name: "Air Diving System",
      type: "Diving Equipment",
      specifications: [
        "Depth Rating: 50m",
        "Deployment: Stage or wet bell",
        "Gas Mix: Air/Nitrox",
        "Comms: Full face mask comms"
      ],
      capabilities: [
        "Shallow Water Inspections",
        "Harbor Maintenance",
        "Emergency Repairs",
        "Marine Construction"
      ],
      image: "/images/equip-air-diving.jpg"
    }
  ];

  const rovEquipment = [
    {
      name: "Work-Class ROV",
      type: "Remotely Operated Vehicle",
      specifications: [
        "Depth Rating: 3000m",
        "Thrusters: 7 x 10HP",
        "Manipulators: 7-function x 2",
        "Cameras: HD + 4K"
      ],
      capabilities: [
        "Subsea Construction",
        "Pipeline Inspection",
        "Debris Clearance",
        "Emergency Response"
      ],
      image: "/images/equip-rov.jpg"
    },
    {
      name: "Inspection Class ROV",
      type: "Remotely Operated Vehicle",
      specifications: [
        "Depth Rating: 1000m",
        "Size: Compact (1.5m x 1m)",
        "Sensors: Sonar, Laser Scaling",
        "Speed: 3 knots"
      ],
      capabilities: [
        "Pipeline Surveys",
        "Asset Inspection",
        "Environmental Monitoring",
        "Shallow Water Operations"
      ],
      image: "/images/equip-inspection-rov.jpg"
    }
  ];

  const categories = [
    { label: "Vessels", icon: <DirectionsBoat /> },
    { label: "Diving Systems", icon: <Engineering /> },
    { label: "ROV Systems", icon: <PrecisionManufacturing /> }
  ];

  return (
    <Box>
      {/* Banner Section */}
      <EquipmentBanner />

      {/* Equipment Categories */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            '& .MuiTabs-indicator': {
              height: 4,
              backgroundColor: theme.palette.primary.main
            }
          }}
        >
          {categories.map((category, index) => (
            <Tab
              key={index}
              label={category.label}
              icon={category.icon}
              iconPosition="start"
              sx={{
                minHeight: 60,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            />
          ))}
        </Tabs>
      </Container>

      {/* Equipment Display */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Vessels Tab Content */}
        {tabValue === 0 && (
          <Box>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Vessel Fleet
            </Typography>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              '& > *': {
                width: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(50% - 32px)' }
              }
            }}>
              {vesselEquipment.map((equipment, index) => (
                <EquipmentCard key={index} {...equipment} />
              ))}
            </Box>
          </Box>
        )}

        {/* Diving Systems Tab Content */}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Diving Equipment
            </Typography>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              '& > *': {
                width: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(50% - 32px)' }
              }
            }}>
              {divingEquipment.map((equipment, index) => (
                <EquipmentCard key={index} {...equipment} />
              ))}
            </Box>
          </Box>
        )}

        {/* ROV Systems Tab Content */}
        {tabValue === 2 && (
          <Box>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              ROV Systems
            </Typography>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              '& > *': {
                width: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(50% - 32px)' }
              }
            }}>
              {rovEquipment.map((equipment, index) => (
                <EquipmentCard key={index} {...equipment} />
              ))}
            </Box>
          </Box>
        )}
      </Container>

      {/* Stats Section */}
      <Box sx={{ 
        backgroundColor: theme.palette.grey[100],
        py: 8,
        mt: 4
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ 
            fontWeight: 700,
            mb: 6
          }}>
            Equipment Capabilities
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center'
          }}>
            <Box sx={{
              width: { xs: '100%', md: 'calc(33.333% - 32px)' },
              textAlign: 'center',
              p: 3,
              borderRadius: 2,
              backgroundColor: 'white',
              boxShadow: 1
            }}>
              <Engineering sx={{ fontSize: '3rem', mb: 2, color: theme.palette.primary.main }} />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                300m
              </Typography>
              <Typography variant="h6">
                Saturation Diving Depth
              </Typography>
            </Box>

            <Box sx={{
              width: { xs: '100%', md: 'calc(33.333% - 32px)' },
              textAlign: 'center',
              p: 3,
              borderRadius: 2,
              backgroundColor: 'white',
              boxShadow: 1
            }}>
              <DirectionsBoat sx={{ fontSize: '3rem', mb: 2, color: theme.palette.primary.main }} />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                3000m
              </Typography>
              <Typography variant="h6">
                ROV Operating Depth
              </Typography>
            </Box>

            <Box sx={{
              width: { xs: '100%', md: 'calc(33.333% - 32px)' },
              textAlign: 'center',
              p: 3,
              borderRadius: 2,
              backgroundColor: 'white',
              boxShadow: 1
            }}>
              <Construction sx={{ fontSize: '3rem', mb: 2, color: theme.palette.primary.main }} />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                250T
              </Typography>
              <Typography variant="h6">
                Maximum Lifting Capacity
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Need Specific Equipment?
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Our equipment specialists can help match the right tools to your project requirements
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<Phone />}
            sx={{ px: 4, py: 1.5 }}
          >
            Call Equipment Team
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<Email />}
            sx={{ px: 4, py: 1.5 }}
          >
            Request Equipment List
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default EquipmentPage;