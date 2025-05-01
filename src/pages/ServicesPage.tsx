import {
  Box,
  Typography,
  Container,
  Card,
  Button,
  useTheme,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Map,
  BugReport,
  Inventory,
  PrecisionManufacturing,
  LocalShipping,
  OilBarrel,
  Phone,
  Email,
  ChevronRight,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const theme = useTheme();

  return (
    <Card
      component={Link}
      to={link}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        p: 3,
        borderRadius: 4,
        textDecoration: "none",
        transition: "all 0.3s ease",
        border: `1px solid ${theme.palette.divider}`,
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: theme.shadows[6],
          borderColor: theme.palette.primary.main,
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
          },
          "& .service-arrow": {
            opacity: 1,
            transform: "translateX(5px)",
          },
        },
      }}
    >
      <Box
        sx={{
          fontSize: "3rem",
          mb: 2,
          color: theme.palette.primary.main,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
        {description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.primary.main,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Learn more
        </Typography>
        <ChevronRight
          className="service-arrow"
          sx={{
            opacity: 0,
            transition: "all 0.3s ease",
            fontSize: "1.2rem",
          }}
        />
      </Box>
    </Card>
  );
};

const ServicesPage = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Hydrographic Positioning & Bathymetric Survey",
      icon: <Map fontSize="inherit" />,
      description:
        "Precision seabed mapping and positioning services with IHO-compliant standards",
      link: "/services/hydrographic-survey",
    },
    {
      title: "Offshore Vessel Fumigation",
      icon: <BugReport fontSize="inherit" />,
      description:
        "IMO-compliant pest control and sanitization services for marine vessels",
      link: "/services/fumigation",
    },
    {
      title: "Procurement Services",
      icon: <Inventory fontSize="inherit" />,
      description:
        "End-to-end procurement solutions for marine and offshore operations",
      link: "/services/procurement",
    },
    {
      title: "Equipment Rental",
      icon: <PrecisionManufacturing fontSize="inherit" />,
      description:
        "Diving, ROV and survey equipment rental with full technical support",
      link: "/services/equipment-rental",
    },
    {
      title: "Environmental & Oil Spill Containment",
      icon: <LocalShipping fontSize="inherit" />,
      description:
        "Rapid response solutions for marine environmental emergencies",
      link: "/services/oil-spill",
    },
    {
      title: "Drilling & Offshore Waste Management",
      icon: <OilBarrel fontSize="inherit" />,
      description:
        "Comprehensive waste solutions compliant with international regulations",
      link: "/services/waste-management",
    },
  ];

  return (
    <Box>
      {/* Hero Banner Section */}
      <Box
        sx={{
          height: "40vh",
          minHeight: 400,
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/services-banner.jpg)",
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
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Marine & Offshore Services
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
            Comprehensive solutions for the offshore energy and marine industries
          </Typography>
        </Container>
      </Box>

      {/* Overview Section */}
      <Container maxWidth="lg" sx={{ py: 8, position: "relative" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: "white",
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            mb: 8,
            boxShadow: theme.shadows[4],
            position: "relative",
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
          >
            <Avatar
              src="/images/service-icon.png"
              sx={{
                width: 150,
                height: 150,
                border: "4px solid white",
                boxShadow: theme.shadows[4],
                display: { xs: "none", md: "flex" },
              }}
            />
            <Box>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Integrated Marine Solutions
              </Typography>
              <Divider
                sx={{
                  width: 80,
                  height: 4,
                  backgroundColor: "white",
                  mb: 3,
                }}
              />
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
                PROSUB delivers specialized services to support offshore energy
                operations with a focus on safety, compliance, and environmental
                protection.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
                Our certified teams and modern equipment ensure reliable service
                delivery across all marine and offshore applications.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Service Statistics */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 3,
            mb: 8,
            textAlign: "center",
          }}
        >
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Certified Professionals" },
            { value: "24/7", label: "Emergency Response" },
            { value: "100%", label: "Regulatory Compliance" },
          ].map((stat, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                minWidth: 150,
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: theme.palette.primary.main,
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="h6">{stat.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Our Service Offerings */}
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
          Our Service Portfolio
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            mb: 10,
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 32px)",
                  md: "calc(33.333% - 32px)",
                },
                minWidth: { xs: "100%", sm: 300 },
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </Box>
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: "white",
            borderRadius: 4,
            p: 6,
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Need Marine Services?
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Our experts are ready to discuss your project requirements
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
              Call +234 703 467 4326
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
              Email Info@prosubng.com
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;