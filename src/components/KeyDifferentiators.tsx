// src/components/KeyDifferentiators.tsx
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  Container,
} from "@mui/material";
import {
  Engineering,
  SafetyCheck,
  PrecisionManufacturing,
  Public,
  Groups,
  VerifiedUser,
} from "@mui/icons-material";

const features = [
  {
    icon: <Engineering fontSize="large" />,
    title: "Technical Expertise",
    description:
      "Our team comprises industry veterans with decades of combined experience",
  },
  {
    icon: <SafetyCheck fontSize="large" />,
    title: "Safety First",
    description:
      "Zero compromise safety culture with industry-leading HSE standards",
  },
  {
    icon: <PrecisionManufacturing fontSize="large" />,
    title: "Advanced Equipment",
    description: "Modern, well-maintained fleet with cutting-edge technology",
  },
  {
    icon: <Public fontSize="large" />,
    title: "Local Presence",
    description: "Deep regional knowledge with global standards of operation",
  },
  {
    icon: <Groups fontSize="large" />,
    title: "Skilled Workforce",
    description: "Highly trained professionals with specialized certifications",
  },
  {
    icon: <VerifiedUser fontSize="large" />,
    title: "Quality Assurance",
    description: "Rigorous quality control processes for consistent results",
  },
];

const KeyDifferentiators = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            color: theme.palette.text.primary,
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
          Why Choose Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 32px)",
                  md: "calc(33.333% - 32px)",
                  lg: "calc(25% - 32px)",
                },
                minWidth: { xs: "100%", sm: "280px" },
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
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  border: "1px solid transparent",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.background.paper,
                  },
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "3rem",
                    mb: 2,
                    "& svg": {
                      transition: "transform 0.3s ease",
                    },
                    "&:hover svg": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default KeyDifferentiators;
