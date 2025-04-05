// src/pages/ProjectsPage.tsx
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const projects = [
  {
    title: "Offshore Pipeline Installation",
    location: "Niger Delta",
    description: "Completed 50km subsea pipeline installation with zero safety incidents",
    image: "/images/project1.jpg",
    year: "2023"
  },
  {
    title: "Platform Maintenance",
    location: "Gulf of Guinea",
    description: "Annual maintenance of offshore production platform",
    image: "/images/project2.jpg",
    year: "2022"
  },
  // Add more projects here
];

const ProjectsPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Our Projects
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '48%', md: '30%' },
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {project.location} • {project.year}
                  </Typography>
                  <Typography variant="body1">
                    {project.description}
                  </Typography>
                </CardContent>
                <Box sx={{ px: 2, pb: 2 }}>
                  <Button endIcon={<ChevronRight />} size="small">
                    View Case Study
                  </Button>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
