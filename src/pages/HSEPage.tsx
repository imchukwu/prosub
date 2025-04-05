// src/pages/HSEPage.tsx
import { Box, Typography, Container, Stack, Card, CardContent } from '@mui/material';
import { HealthAndSafety, Security, Nature } from '@mui/icons-material';

const hsePrinciples = [
  {
    title: "Health",
    icon: <HealthAndSafety fontSize="large" />,
    description: "Comprehensive health programs for all employees including regular medical checkups and wellness initiatives"
  },
  {
    title: "Safety",
    icon: <Security fontSize="large" />,
    description: "Stringent safety protocols and continuous training to ensure zero accidents"
  },
  {
    title: "Environment",
    icon: <Nature fontSize="large" />, // Replaced Eco with Nature
    description: "Sustainable operations with minimal environmental impact through best practices"
  }
];

const HSEPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          HSE Commitment
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
          Our Health, Safety, and Environmental Policy
        </Typography>
        
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mb: 8 }}>
          {hsePrinciples.map((principle, index) => (
            <Card key={index} sx={{ flex: 1, textAlign: 'center', p: 4 }}>
              <CardContent>
                <Box sx={{ color: 'primary.main', fontSize: '3rem', mb: 3 }}>
                  {principle.icon}
                </Box>
                <Typography variant="h4" gutterBottom>
                  {principle.title}
                </Typography>
                <Typography>
                  {principle.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        
        {/* Rest of the HSEPage content remains the same */}
      </Container>
    </Box>
  );
};

export default HSEPage;