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
  Cable,
  Construction,
  Assessment,
  Schedule,
  Phone,
  Email,
} from "@mui/icons-material";

const PipelineServices = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Pipeline Installation",
      icon: <Cable fontSize="small" />,
      description:
        "Full-service installation of subsea and topside pipelines including engineering and commissioning",
    },
    {
      title: "Pipeline Inspection",
      icon: <Assessment fontSize="small" />,
      description:
        "Advanced inspection services using ROVs, AUVs and inline inspection tools",
    },
    {
      title: "Pipeline Repair",
      icon: <Construction fontSize="small" />,
      description:
        "Emergency and planned repair services including clamp installation and hyperbaric welding",
    },
    {
      title: "Pipeline Pre-Commissioning",
      icon: <Engineering fontSize="small" />,
      description:
        "Flooding, cleaning, gauging, hydrotesting and drying services",
    },
    {
      title: "Pipeline Decommissioning",
      icon: <Cable fontSize="small" />,
      description:
        "Safe and environmentally responsible pipeline abandonment and removal",
    },
    {
      title: "Pipeline Maintenance",
      icon: <PrecisionManufacturing fontSize="small" />,
      description:
        "Preventive maintenance programs including CP surveys and anode replacement",
    },
  ];

  const certifications = [
    "API 1104 Certified",
    "ASME B31.4/B31.8 Compliant",
    "DNV-OS-F101 Certified",
    "ISO 9001:2015 Certified",
    "NOSDRA Approved",
    "IMCA Pipeline Specialist",
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          height: "40vh",
          minHeight: 400,
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/pipeline-banner.jpg)",
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
            Pipeline Services
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
            Comprehensive pipeline solutions from installation to
            decommissioning
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
              Pipeline Engineering & Operations
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
              PROSUB provides end-to-end pipeline services for the oil and gas
              industry. Our expertise covers the entire pipeline lifecycle from
              conceptual design through to decommissioning.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              With specialized pipeline vessels and equipment, we deliver safe,
              efficient and cost-effective solutions for all your pipeline needs
              in West African waters and beyond.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Request Quote
              </Button>
              <Button variant="outlined" color="primary" size="large">
                View Pipeline Fleet
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
              src="/images/pipeline-operation.jpg"
              alt="Pipeline Operation"
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
            Our Pipeline Services
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
                  <Cable color="primary" />
                </ListItemIcon>
                <ListItemText primary='Pipeline installation (up to 48" diameter)' />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Cable color="primary" />
                </ListItemIcon>
                <ListItemText primary="S-lay and J-lay installation methods" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Cable color="primary" />
                </ListItemIcon>
                <ListItemText primary="Deepwater pipeline installation (to 3000m)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Cable color="primary" />
                </ListItemIcon>
                <ListItemText primary="Inline structure installation (tees, valves, etc.)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Cable color="primary" />
                </ListItemIcon>
                <ListItemText primary="Pipeline trenching and burial (jetting, ploughing)" />
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
                Quality Assurance
              </Typography>
              <Typography variant="body1" paragraph>
                All pipeline operations comply with API, ASME, and DNV
                standards. Our quality management system ensures defect-free
                installation and maintenance operations.
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
            Need Pipeline Expertise?
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Our pipeline specialists are available to support your projects with
            24/7 emergency response capability
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
              Call Pipeline Team
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
              Email Technical Proposal
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PipelineServices;
