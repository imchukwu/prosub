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
  ListItemText,
} from "@mui/material";
import {
  DirectionsBoat,
  Anchor,
  Support,
  Engineering,
  SafetyCheck,
  Schedule,
  Phone,
  Email,
  Radar,
} from "@mui/icons-material";

const MarineSupport = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Anchor Handling",
      icon: <Anchor fontSize="small" />,
      description:
        "Professional anchor handling services for rig moves, moorings and positioning",
    },
    {
      title: "Tug Assistance",
      icon: <DirectionsBoat fontSize="small" />,
      description:
        "Harbor, coastal and offshore tug services for vessel maneuvering",
    },
    {
      title: "Platform Supply",
      icon: <Support fontSize="small" />,
      description:
        "Full range of platform supply services including dry and liquid cargo",
    },
    {
      title: "Standby Vessels",
      icon: <SafetyCheck fontSize="small" />,
      description:
        "Emergency response and standby vessels for offshore operations",
    },
    {
      title: "Survey Support",
      icon: <Radar fontSize="small" />,
      description: "Vessel support for hydrographic and geophysical surveys",
    },
    {
      title: "Crew Transfer",
      icon: <Engineering fontSize="small" />,
      description:
        "Safe and efficient crew transfer services for offshore installations",
    },
  ];

  const certifications = [
    "OCIMF MOU Approved",
    "ISPS Code Compliant",
    "ISO 9001:2015 Certified",
    "ISM Code Certified",
    "IMCA Member",
    "Nigerian Cabotage Compliant",
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          height: "40vh",
          minHeight: 400,
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/marine-support-banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
            zIndex: 1,
          },
        }}
      >
        <Container
          sx={{
            maxWidth: "lg",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Marine Support Services
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.5rem", md: "2rem" },
              textShadow: "0 1px 5px rgba(0,0,0,0.3)",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            Comprehensive marine solutions for offshore and coastal operations
          </Typography>
        </Container>
      </Box>

      {/* Overview Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Professional Marine Operations
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                mb: 3,
              }}
            />
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              PROSUB Marine provides specialized support vessels and services
              for the offshore energy industry. Our modern fleet and experienced
              crews deliver safe, reliable operations in West African waters.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              From anchor handling to emergency response, we offer complete
              marine solutions tailored to your operational requirements.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Request Vessel
              </Button>
              <Button variant="outlined" color="primary" size="large">
                View Fleet Specifications
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src="/images/marine-operation.jpg"
              alt="Marine Support Operation"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Box>
        </Stack>
      </Container>

      {/* Services Section */}
      <Box sx={{ backgroundColor: theme.palette.grey[100], py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              position: "relative",
              "&:after": {
                content: '""',
                display: "block",
                width: 80,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                margin: "20px auto 0",
              },
            }}
          >
            Our Marine Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 32px)",
                    md: "calc(33.333% - 32px)",
                  },
                  p: 3,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "2.5rem",
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Fleet Capabilities
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <DirectionsBoat color="primary" />
                </ListItemIcon>
                <ListItemText primary="Anchor Handling Tugs (AHT) with 100T+ bollard pull" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <DirectionsBoat color="primary" />
                </ListItemIcon>
                <ListItemText primary="Platform Supply Vessels (PSV) with 3000DWT capacity" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <DirectionsBoat color="primary" />
                </ListItemIcon>
                <ListItemText primary="Fast Crew Boats (30+ passenger capacity)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <DirectionsBoat color="primary" />
                </ListItemIcon>
                <ListItemText primary="Emergency Response and Rescue Vessels (ERRV)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <DirectionsBoat color="primary" />
                </ListItemIcon>
                <ListItemText primary="Multipurpose Support Vessels with ROV capability" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Certifications
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {certifications.map((cert, index) => (
                <Chip
                  key={index}
                  label={cert}
                  color="primary"
                  variant="outlined"
                  sx={{
                    borderRadius: 1,
                    borderWidth: 2,
                    fontSize: "0.9rem",
                    padding: 1,
                  }}
                />
              ))}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Safety & Compliance
              </Typography>
              <Typography variant="body1" paragraph>
                All vessels operate under international safety standards with
                regular audits and inspections. Our marine safety record
                maintains a 99.8% incident-free operation history.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Need Marine Support?
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Our marine coordinators are available 24/7 to discuss your vessel
            requirements
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Phone />}
              sx={{ px: 4, py: 1.5 }}
            >
              Call Marine Operations
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<Email />}
              sx={{
                px: 4,
                py: 1.5,
                borderWidth: 2,
                "&:hover": { borderWidth: 2 },
              }}
            >
              Email Vessel Request
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MarineSupport;
