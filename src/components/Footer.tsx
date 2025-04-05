// src/components/Footer.tsx
import {
  Box,
  Typography,
  Link,
  Divider,
  useTheme,
  Container,
  Stack,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: "white",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: theme.palette.grey[700] }}
            />
          }
        >
          {/* Company Info */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              PROSUB Firm
            </Typography>
            <Typography variant="body1" paragraph>
              Providing comprehensive oilfield services with excellence, safety,
              and environmental responsibility.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Quick Links
            </Typography>
            <Box
              component="nav"
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/projects" color="inherit" underline="hover">
                Projects
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <LocationOn />
              <Typography>123 Energy Avenue, Port Harcourt, Nigeria</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Phone />
              <Typography>+234 123 456 7890</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Email />
              <Typography>info@prosub.com</Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ my: 4, backgroundColor: theme.palette.grey[700] }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} OilServ Firm. All rights reserved. |
            ISO 9001:2015 Certified | Member of Petroleum Technology Association
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
