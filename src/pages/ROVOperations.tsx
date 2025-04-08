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
  Engineering,
  PrecisionManufacturing,
  Sensors,
  Cable,
  Visibility,
  Schedule,
  Public,
  Phone,
  Email,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ROVOperations = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Subsea Inspection",
      icon: <Visibility fontSize="small" />,
      description:
        "High-definition visual inspections of underwater infrastructure",
    },
    {
      title: "Pipeline Survey",
      icon: <Cable fontSize="small" />,
      description:
        "Detailed pipeline integrity assessments using sonar and laser profiling",
    },
    {
      title: "ROV Intervention",
      icon: <PrecisionManufacturing fontSize="small" />,
      description:
        "Manipulator-based operations for subsea equipment maintenance",
    },
    {
      title: "Debris Clearance",
      icon: <Engineering fontSize="small" />,
      description: "ROV-assisted removal of underwater obstructions",
    },
    {
      title: "Construction Support",
      icon: <Engineering fontSize="small" />,
      description:
        "Real-time monitoring and assistance for subsea construction projects",
    },
    {
      title: "Environmental Monitoring",
      icon: <Sensors fontSize="small" />,
      description: "Data collection for environmental impact assessments",
    },
  ];

  const certifications = [
    "IMCA ROV Certified",
    "ISO 9001:2015 Certified",
    "API RP2D Compliant",
    "NOSDRA Approved",
    "Class Approved ROV Systems",
    "DOT Certified Operations",
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          height: "40vh",
          minHeight: 400,
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/rov-banner.jpg)",
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
            ROV Operations
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
            Advanced remotely operated vehicle services for deepwater operations
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
              Precision Subsea Solutions
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
              PROSUB's ROV division provides cutting-edge remotely operated
              vehicle services for the offshore energy sector. Our
              IMCA-certified ROV teams operate work-class systems capable of
              depths to 3000 meters.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Equipped with high-definition cameras, manipulator arms, and
              specialized tooling, our ROVs deliver cost-effective solutions for
              inspection, maintenance, and construction projects.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Request Quote
              </Button>
              <Button variant="outlined" color="primary" size="large">
                View ROV Fleet
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
              src="/images/rov-operation.jpg"
              alt="ROV Operation"
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
            Our ROV Services
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
              Technical Capabilities
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <PrecisionManufacturing color="primary" />
                </ListItemIcon>
                <ListItemText primary="Work-class ROVs (3000m depth rating)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <PrecisionManufacturing color="primary" />
                </ListItemIcon>
                <ListItemText primary="7-function manipulator arms" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <PrecisionManufacturing color="primary" />
                </ListItemIcon>
                <ListItemText primary="HD cameras and laser scaling systems" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <PrecisionManufacturing color="primary" />
                </ListItemIcon>
                <ListItemText primary="Integrated sonar and profiling systems" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <PrecisionManufacturing color="primary" />
                </ListItemIcon>
                <ListItemText primary="ROV-based cleaning and cutting tools" />
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
                Operational Standards
              </Typography>
              <Typography variant="body1" paragraph>
                All ROV operations comply with IMCA R002, API RP2D, and Nigerian
                offshore regulations. Our systems undergo rigorous maintenance
                with 98% operational availability.
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
            Need ROV Support for Your Project?
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Our ROV teams are ready to deploy with 24-hour mobilization
            capability
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
              Call ROV Operations
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
              Email ROV Team
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ROVOperations;
