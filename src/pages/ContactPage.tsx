import {
  Box,
  Typography,
  Container,
  Card,
  useTheme,
  Button,
  Divider,
  TextField,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Public,
  Send,
  Business,
  Person,
  Subject
} from "@mui/icons-material";
import { useState } from "react";

// Contact Banner Section
const ContactBanner = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{
      height: '40vh',
      minHeight: 400,
      backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/contact-banner.jpg)',
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
          Contact PROSUB
        </Typography>
        <Typography variant="h4" sx={{ 
          fontWeight: 400,
          fontSize: { xs: '1.5rem', md: '2rem' },
          textShadow: '0 1px 5px rgba(0,0,0,0.3)',
          maxWidth: 800,
          margin: '0 auto'
        }}>
          Get in touch with our team for your marine and subsea solutions
        </Typography>
      </Container>
    </Box>
  );
};

// Contact Page Component
const ContactPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Box>
      {/* Banner Section */}
      <ContactBanner />

      {/* Contact Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6
        }}>
          {/* Contact Information */}
          <Box sx={{ width: { xs: '100%', md: '40%' } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Our Offices
            </Typography>
            
            <Card sx={{ p: 4, mb: 4, boxShadow: 3 }}>
              <List>
                <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Head Office"
                    secondary={
                      <>
                        <Box component="span" display="block">
                          Plot 245/245 Futo Housing Estate
                        </Box>
                        <Box component="span" display="block">
                          Obinze, Owerri North
                        </Box>
                        <Box component="span" display="block">
                          Imo State
                        </Box>
                      </>
                    }
                    secondaryTypographyProps={{ component: 'div' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Branch Office"
                    secondary={
                      <>
                        <Box component="span" display="block">
                          House 1, Opposite Abass Olusuga Avenue
                        </Box>
                        <Box component="span" display="block">
                          Ire 1 Agufoye Igbogbo
                        </Box>
                        <Box component="span" display="block">
                          Ikorodu, Lagos State
                        </Box>
                      </>
                    }
                    secondaryTypographyProps={{ component: 'div' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone"
                    secondary="+234 703 467 4326"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email"
                    secondary="Info@prosubng.com"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Schedule color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Working Hours"
                    secondary="Monday - Friday: 8:00 AM - 5:00 PM"
                  />
                </ListItem>
              </List>
            </Card>

            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
              Emergency Contacts
            </Typography>
            <Typography variant="body1" paragraph>
              24/7 emergency response lines for urgent marine and diving operations:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              +234 807 654 3210 (Diving)
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
              +234 807 654 3211 (Marine)
            </Typography>
          </Box>

          {/* Contact Form */}
          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Send Us a Message
            </Typography>
            
            {submitted ? (
              <Alert severity="success" sx={{ mb: 4 }}>
                Thank you for your message! Our team will contact you shortly.
              </Alert>
            ) : null}

            <Card sx={{ p: 4, boxShadow: 3 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  flexWrap: 'wrap',
                  gap: 3
                }}>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)' } }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <Person color="action" sx={{ mr: 1 }} />
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)' } }}>
                    <TextField
                      fullWidth
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <Business color="action" sx={{ mr: 1 }} />
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)' } }}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <Email color="action" sx={{ mr: 1 }} />
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)' } }}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <Phone color="action" sx={{ mr: 1 }} />
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <Subject color="action" sx={{ mr: 1 }} />
                        ),
                      }}
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<Send />}
                      sx={{ px: 4, py: 1.5 }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </form>
            </Card>

            <Box sx={{ mt: 4, p: 3, backgroundColor: theme.palette.grey[100], borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Business Development
              </Typography>
              <Typography variant="body1" paragraph>
                For partnership opportunities, tenders, and business inquiries:
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Email />}
                sx={{ mt: 1 }}
              >
                bd@prosubng.com
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Map Section */}
      <Box sx={{ height: 400, width: '100%' }}>
        <iframe
          title="PROSUB Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.611284464407!2d3.421734415231553!3d6.428096595338381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52d9f6f9a9b%3A0x5c5a3d9a5b5a5a5a!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Ready to Discuss Your Project?
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Our team is available to answer your questions and provide solutions
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<Phone />}
            sx={{ px: 4, py: 1.5, mb: { xs: 2, sm: 0 } }}
          >
            Call Us Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<Email />}
            sx={{ px: 4, py: 1.5 }}
          >
            Email Inquiry
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;