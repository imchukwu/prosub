// src/pages/ContactPage.tsx
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import { Phone, Email, LocationOn, Send } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Contact Us
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Box
              component="form"
              sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField fullWidth label="Name" variant="outlined" required />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  required
                />
              </Stack>
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{ alignSelf: "flex-start", mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              Our Offices
            </Typography>
            <Box
              sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}
            >
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocationOn color="primary" /> Headquarters
                </Typography>
                <Typography>
                  123 Energy Avenue, Port Harcourt, Rivers State, Nigeria
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Phone color="primary" /> Phone
                </Typography>
                <Typography>+234 123 456 7890 (Office)</Typography>
                <Typography>+234 987 654 3210 (Emergency)</Typography>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Email color="primary" /> Email
                </Typography>
                <Typography>info@prosub.com</Typography>
                <Typography>support@prosub.com</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant="h6" gutterBottom>
                  Operational Hours
                </Typography>
                <Typography>Monday - Friday: 8:00 AM - 5:00 PM</Typography>
                <Typography>Emergency Services: 24/7</Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;
