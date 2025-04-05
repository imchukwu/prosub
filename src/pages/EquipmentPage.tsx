// src/pages/EquipmentPage.tsx
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore, DirectionsBoat, Build, Engineering } from '@mui/icons-material';

const equipmentCategories = [
  {
    name: "Marine Vessels",
    icon: <DirectionsBoat />,
    items: [
      "Anchor Handling Tug Supply (AHTS) vessels",
      "Platform Supply Vessels (PSV)",
      "Diving Support Vessels",
      "Crew Boats"
    ]
  },
  {
    name: "Specialized Equipment",
    icon: <Build />,
    items: [
      "ROV Systems",
      "Diving Systems",
      "Pipeline Inspection Tools",
      "Cathodic Protection Equipment"
    ]
  },
  // Add more categories
];

const EquipmentPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Our Equipment & Fleet
        </Typography>
        
        {equipmentCategories.map((category, index) => (
          <Accordion key={index} defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {category.icon}
                <Typography variant="h5">{category.name}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {category.items.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default EquipmentPage;