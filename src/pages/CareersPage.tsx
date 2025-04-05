// src/pages/CareersPage.tsx
import { Box, Typography, Container, Card, CardContent, Button, Chip } from '@mui/material';
import { Work, LocationOn, Business, Schedule } from '@mui/icons-material';

const jobOpenings = [
  {
    title: "Offshore Project Manager",
    type: "Full-time",
    location: "Port Harcourt",
    department: "Operations",
    description: "Lead offshore projects with a focus on safety and efficiency"
  },
  // Add more jobs
];

const CareersPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Join Our Team
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
          Build your career in the oil and gas industry
        </Typography>
        
        {jobOpenings.map((job, index) => (
          <Card key={index} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {job.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                <Chip icon={<Work />} label={job.type} />
                <Chip icon={<LocationOn />} label={job.location} />
                <Chip icon={<Business />} label={job.department} />
              </Box>
              <Typography paragraph>
                {job.description}
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default CareersPage;