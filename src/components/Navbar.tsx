import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider
} from '@mui/material';
import { 
  Link,
  useNavigate 
} from 'react-router-dom';
import { 
  ExpandMore,
  Map, // For Hydrographic Survey
  BugReport, // For Fumigation
  Inventory, // For Procurement
  PrecisionManufacturing, // For Equipment Rental
  LocalShipping, // For Oil Spill Containment
  Dangerous, // For Waste Management
  Construction,
  MedicalServices,
  Engineering
} from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const services = [
    { 
      name: "Hydrographic Positioning & Bathymetric Survey", 
      icon: <Map fontSize="small" />, 
      path: "/services/hydrographic" 
    },
    { 
      name: "Offshore Vessel Fumigation", 
      icon: <BugReport fontSize="small" />, 
      path: "/services/fumigation" 
    },
    { 
      name: "Procurement Services", 
      icon: <Inventory fontSize="small" />, 
      path: "/services/procurement" 
    },
    { 
      name: "Equipment Rental", 
      icon: <PrecisionManufacturing fontSize="small" />, 
      path: "/services/equipment-rental" 
    },
    { 
      name: "Environmental & Oil Spill Containment", 
      icon: <LocalShipping fontSize="small" />, 
      path: "/services/oil-spill" 
    },
    { 
      name: "Drilling & Offshore Waste Management", 
      icon: <Dangerous fontSize="small" />, 
      path: "/services/waste-management" 
    }
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none'
            }}
          >
            PROSUB
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button component={Link} to="/about" color="inherit" sx={{ color: 'text.primary' }}>
              About
            </Button>
            
            {/* Services Dropdown */}
            <Button
              color="inherit"
              sx={{ color: 'text.primary' }}
              aria-controls={open ? 'services-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<ExpandMore sx={{ fontSize: '1rem' }} />}
            >
              Services
            </Button>
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'services-button',
                sx: { py: 0 }
              }}
              PaperProps={{
                elevation: 3,
                sx: {
                  borderRadius: 2,
                  minWidth: 280
                }
              }}
            >
              <MenuItem onClick={() => handleServiceClick("/services")} sx={{ py: 1.5 }}>
                <Typography fontWeight={500}>All Services Overview</Typography>
              </MenuItem>
              <Divider />
              {services.map((service, index) => (
                <MenuItem 
                  key={index} 
                  onClick={() => handleServiceClick(service.path)}
                  sx={{ py: 1.5 }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {service.icon}
                  </ListItemIcon>
                  {service.name}
                </MenuItem>
              ))}
            </Menu>

            <Button component={Link} to="/projects" color="inherit" sx={{ color: 'text.primary' }}>
              Projects
            </Button>
            <Button component={Link} to="/equipment" color="inherit" sx={{ color: 'text.primary' }}>
              Equipment
            </Button>
            <Button component={Link} to="/contact" color="primary" variant="contained">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;