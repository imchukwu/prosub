import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
  Button,
} from "@mui/material";
import {
  History,
  GppGood,
  SafetyDivider,
  Groups,
  Flag,
  Engineering,
  Public,
  Handshake,
} from "@mui/icons-material";

// ValueCard Component with TypeScript types
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Banner Section Component
const AboutBanner = () => {
  return (
    <Box
      sx={{
        height: "40vh",
        minHeight: 400,
        backgroundImage:
          "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url(/images/about-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        mb: 8,
      }}
    >
      <Container sx={{ maxWidth: "lg" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          About PROSUB
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          Pioneering Underwater Engineering Solutions Since 2016
        </Typography>
      </Container>
    </Box>
  );
};

// ValueCard Component
const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 4,
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: theme.shadows[6],
          backgroundColor: theme.palette.primary.light,
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "3.5rem",
          mb: 3,
          color: theme.palette.primary.main,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Card>
  );
};

// About Page Component
const AboutPage = () => {
  const theme = useTheme();

  const coreValues = [
    {
      icon: <GppGood fontSize="inherit" />,
      title: "Quality",
      description:
        "Meeting/exceeding client requirements with complete quality standards",
    },
    {
      icon: <SafetyDivider fontSize="inherit" />,
      title: "Safety",
      description:
        "Ensuring health and safety of all personnel and environment",
    },
    {
      icon: <Public fontSize="inherit" />,
      title: "Social Responsibility",
      description: "Commitment to ethical standards and community development",
    },
    {
      icon: <Engineering fontSize="inherit" />,
      title: "Local Content",
      description:
        "Maximizing Nigerian content without compromising technical integrity",
    },
    {
      icon: <Groups fontSize="inherit" />,
      title: "Team Work",
      description:
        "Subordinating individual interests to achieve organizational targets",
    },
    {
      icon: <Handshake fontSize="inherit" />,
      title: "Integrity",
      description:
        "Unwavering ethical conduct and taking responsibility for our actions",
    },
  ];

  return (
    <Box>
      {/* Banner Section */}
      <AboutBanner />

      <Container sx={{ maxWidth: "lg" }}>
        {/* Company Overview */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mb: 8,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/images/about-company.jpg"
              alt="PROSUB Team"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", mb: 3 }}
            >
              PROSUB Nigeria Limited is an indigenous diving and marine
              contracting firm established in 2016, specializing in underwater
              engineering, marine transportation, offshore construction, and
              marine environment research.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", mb: 3 }}
            >
              We've grown to become a trusted partner in the Nigerian oil and
              gas industry through our commitment to excellence, safety, and
              innovative solutions.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{ mt: 2 }}
            >
              Download Company Profile
            </Button>
          </Box>
        </Box>

        {/* Core Values */}
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
              backgroundColor: "primary.main",
              margin: "20px auto 0",
            },
          }}
        >
          Our Core Values
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            mb: 8,
            justifyContent: "center",
          }}
        >
          {coreValues.map((value, index) => (
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
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Certifications Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[100],
          py: 8,
          mb: 8,
        }}
      >
        <Container sx={{ maxWidth: "lg" }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
            }}
          >
            Certifications & Accreditations
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 32px)",
                  md: "calc(33.333% - 32px)",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Box
                  component="img"
                  src="/images/iso-cert.png"
                  alt="ISO 9001:2015"
                  sx={{
                    height: 120,
                    width: "auto",
                    mb: 3,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  ISO 9001:2015
                </Typography>
                <Typography>Quality Management System Certified</Typography>
              </Card>
            </Box>

            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 32px)",
                  md: "calc(33.333% - 32px)",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Box
                  component="img"
                  src="/images/imca-logo.png"
                  alt="IMCA Member"
                  sx={{
                    height: 120,
                    width: "auto",
                    mb: 3,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  IMCA Member
                </Typography>
                <Typography>Diving & ROV Divisions</Typography>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Management Team */}
      <Container sx={{ maxWidth: "lg", mb: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
          }}
        >
          Leadership Team
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <Box
              key={item}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 32px)",
                  md: "calc(25% - 32px)",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 2,
                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                <Box
                  component="img"
                  src={`/images/team-${item}.jpg`}
                  alt={`Team Member ${item}`}
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mb: 3,
                    border: `4px solid ${theme.palette.primary.main}`,
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {
                    [
                      "John Doe",
                      "Jane Smith",
                      "Mike Johnson",
                      "Sarah Williams",
                    ][item - 1]
                  }
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {
                    [
                      "CEO",
                      "Operations Director",
                      "HSE Manager",
                      "ROV Supervisor",
                    ][item - 1]
                  }
                </Typography>
                <Typography variant="body2" paragraph>
                  {
                    [
                      "20+ years in marine operations",
                      "Specialist in underwater engineering",
                      "HSE certification expert",
                      "ROV operations specialist",
                    ][item - 1]
                  }
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
