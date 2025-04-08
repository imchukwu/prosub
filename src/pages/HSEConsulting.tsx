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
  HealthAndSafety,
  Engineering,
  Assessment,
  GppGood,
  MonitorHeart,
  Checklist,
  Phone,
  Email,
  VerifiedUser,
} from "@mui/icons-material";

const HSEConsulting = () => {
  const theme = useTheme();

  const services = [
    {
      title: "HSE Management Systems",
      icon: <HealthAndSafety fontSize="small" />,
      description:
        "Development and implementation of comprehensive HSE management systems",
    },
    {
      title: "Risk Assessments",
      icon: <Assessment fontSize="small" />,
      description:
        "Hazard identification and risk assessment for all operational phases",
    },
    {
      title: "Regulatory Compliance",
      icon: <VerifiedUser fontSize="small" />,
      description:
        "Ensuring compliance with local and international HSE regulations",
    },
    {
      title: "Audit & Inspection",
      icon: <Checklist fontSize="small" />,
      description: "Independent HSE audits and facility inspections",
    },
    {
      title: "Emergency Preparedness",
      icon: <MonitorHeart fontSize="small" />,
      description: "Emergency response planning and drills",
    },
    {
      title: "Training & Competency",
      icon: <GppGood fontSize="small" />,
      description: "HSE training programs and competency assessments",
    },
  ];

  const certifications = [
    "ISO 45001 Certified",
    "ISO 14001 Certified",
    "OSHA Compliance Specialists",
    "NEBOSH Accredited",
    "IMCA HSE Approved",
    "NOSDRA Certified",
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          height: "40vh",
          minHeight: 400,
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/hse-banner.jpg)",
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
            HSE Consulting Services
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
            Comprehensive Health, Safety and Environmental solutions for your
            operations
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
              Safety Excellence
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
              PROSUB HSE Consulting provides expert advisory services to help
              organizations achieve operational excellence in health, safety and
              environmental management.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Our team of certified professionals delivers practical solutions
              that meet regulatory requirements while enhancing operational
              safety and environmental performance.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Request Consultation
              </Button>
              <Button variant="outlined" color="primary" size="large">
                View HSE Standards
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
              src="/images/hse-consulting.jpg"
              alt="HSE Consulting"
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
            Our HSE Services
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
                  <HealthAndSafety color="primary" />
                </ListItemIcon>
                <ListItemText primary="Process Safety Management (PSM) implementation" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <HealthAndSafety color="primary" />
                </ListItemIcon>
                <ListItemText primary="Hazard and Operability Studies (HAZOP)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <HealthAndSafety color="primary" />
                </ListItemIcon>
                <ListItemText primary="Environmental Impact Assessments (EIA)" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <HealthAndSafety color="primary" />
                </ListItemIcon>
                <ListItemText primary="Safety Case development" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <HealthAndSafety color="primary" />
                </ListItemIcon>
                <ListItemText primary="Behavioral Safety programs" />
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
                Industry Standards
              </Typography>
              <Typography variant="body1" paragraph>
                Our consulting services align with international standards
                including ISO 45001, ISO 14001, OSHA, and local regulatory
                requirements for comprehensive HSE management.
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
            Ready to Enhance Your HSE Performance?
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Our HSE consultants are available to assess your needs and develop
            customized solutions
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
              Call HSE Experts
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
              Request HSE Audit
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HSEConsulting;
