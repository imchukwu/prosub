import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {
  Engineering,
  Construction,
  Public,
  Timeline,
  Assessment,
  LocationOn,
  CalendarToday,
  Flag
} from "@mui/icons-material";

// ProjectCard Component with TypeScript types
interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  categories: string[];
  image: string;
}

// Projects Banner Section
const ProjectsBanner = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{
      height: '40vh',
      minHeight: 400,
      backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(/images/projects-banner.jpg)',
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
          Our Projects
        </Typography>
        <Typography variant="h4" sx={{ 
          fontWeight: 400,
          fontSize: { xs: '1.5rem', md: '2rem' },
          textShadow: '0 1px 5px rgba(0,0,0,0.3)',
          maxWidth: 800,
          margin: '0 auto'
        }}>
          Delivering excellence through innovative marine and subsea solutions
        </Typography>
      </Container>
    </Box>
  );
};

// ProjectCard Component
const ProjectCard = ({ title, description, location, date, categories, image }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {categories.map((category, index) => (
            <Chip 
              key={index}
              label={category}
              color="primary"
              size="small"
              variant="outlined"
            />
          ))}
        </Box>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List dense>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <LocationOn color="primary" />
            </ListItemIcon>
            <ListItemText primary={location} />
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CalendarToday color="primary" />
            </ListItemIcon>
            <ListItemText primary={date} />
          </ListItem>
        </List>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          fullWidth
          endIcon={<Flag />}
        >
          View Project Details
        </Button>
      </Box>
    </Card>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const theme = useTheme();

  const projects = [
    {
      title: "Bonga Field Pipeline Installation",
      description: "Installation of 28km subsea pipeline at 1200m depth using J-lay method with full pre-commissioning services",
      location: "Offshore Nigeria",
      date: "2022 - 2023",
      categories: ["Pipeline", "Deepwater"],
      image: "/images/project-pipeline.jpg"
    },
    {
      title: "Egina FPSO Mooring Installation",
      description: "Installation of 16-point mooring system for FPSO including anchor handling and chain installation",
      location: "OML 130, Nigeria",
      date: "2021",
      categories: ["Mooring", "Offshore Construction"],
      image: "/images/project-mooring.jpg"
    },
    {
      title: "Escravos Underwater Inspection",
      description: "Comprehensive ROV inspection of subsea assets including pipelines, risers and platform jackets",
      location: "Escravos Terminal",
      date: "2020 - Ongoing",
      categories: ["Inspection", "ROV"],
      image: "/images/project-inspection.jpg"
    },
    {
      title: "Yoho Field Platform Decommissioning",
      description: "Safe removal and disposal of offshore platform including well abandonment and pipeline decommissioning",
      location: "Yoho Field, Nigeria",
      date: "2019 - 2020",
      categories: ["Decommissioning", "Diving"],
      image: "/images/project-decom.jpg"
    },
    {
      title: "Okwori Subsea Manifold Installation",
      description: "Installation of subsea production manifold at 450m depth with associated tie-ins and controls",
      location: "OML 126, Nigeria",
      date: "2018",
      categories: ["Subsea", "Construction"],
      image: "/images/project-manifold.jpg"
    },
    {
      title: "EA Field Pipeline Repair",
      description: "Emergency repair of damaged 24\" pipeline including hyperbaric welding and clamp installation",
      location: "EA Field, Nigeria",
      date: "2017",
      categories: ["Pipeline", "Repair"],
      image: "/images/project-repair.jpg"
    }
  ];

  const services = [
    {
      icon: <Engineering fontSize="large" />,
      title: "Pipeline Installation",
      count: "18+"
    },
    {
      icon: <Construction fontSize="large" />,
      title: "Offshore Construction",
      count: "24+"
    },
    {
      icon: <Public fontSize="large" />,
      title: "Subsea Inspection",
      count: "35+"
    },
    {
      icon: <Timeline fontSize="large" />,
      title: "ROV Operations",
      count: "12+"
    }
  ];

  return (
    <Box>
      {/* Banner Section */}
      <ProjectsBanner />

      {/* Projects Overview */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
          Our Project Portfolio
        </Typography>
        
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          '& > *': {
            width: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(33.333% - 32px)' },
            minWidth: { xs: '100%', sm: 300 },
          }
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Box>
      </Container>

      {/* Stats Section */}
      <Box sx={{ 
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ 
            fontWeight: 700,
            mb: 6
          }}>
            Project Statistics
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            '& > *': {
              width: { xs: 'calc(50% - 32px)', sm: 'calc(25% - 32px)' },
              minWidth: 150,
              maxWidth: 300
            }
          }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ 
                textAlign: 'center',
                p: 3,
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}>
                <Box sx={{ 
                  fontSize: '3rem',
                  mb: 2,
                  color: theme.palette.secondary.main
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {service.count}
                </Typography>
                <Typography variant="h6">
                  {service.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Have a Project to Discuss?
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Our project management team is ready to assist with your marine and subsea requirements
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ px: 6, py: 1.5 }}
        >
          Contact Project Team
        </Button>
      </Container>
    </Box>
  );
};

export default ProjectsPage;