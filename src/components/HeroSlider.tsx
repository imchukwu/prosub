import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { 
  Map, 
  BugReport, 
  Inventory, 
  PrecisionManufacturing, 
  LocalShipping, 
  Dangerous 
} from "@mui/icons-material";

const slides = [
  {
    title: "Hydrographic Positioning & Bathymetric Survey",
    description: "Precision seabed mapping and underwater positioning services with IHO-compliant standards",
    image: "/images/hydrographic-survey.jpg",
    cta: "Explore Survey Services",
    icon: <Map fontSize="large" />,
  },
  {
    title: "Offshore Vessel Fumigation",
    description: "IMO-compliant pest control and sanitization services for marine vessels and offshore platforms",
    image: "/images/fumigation.jpg",
    cta: "View Fumigation Services",
    icon: <BugReport fontSize="large" />,
  },
  {
    title: "Procurement Services",
    description: "End-to-end marine procurement and supply chain solutions for offshore operations",
    image: "/images/procurement.jpg",
    cta: "Learn About Procurement",
    icon: <Inventory fontSize="large" />,
  },
  {
    title: "Diving, ROV and Equipment Rental",
    description: "Premium diving, ROV and survey equipment rental with full technical support",
    image: "/images/diving.jpg",
    cta: "View Rental Equipment",
    icon: <PrecisionManufacturing fontSize="large" />,
  },
  {
    title: "Environmental & Oil Spill Containment",
    description: "Rapid response solutions for marine environmental emergencies and oil spill containment",
    image: "/images/oil-spill.jpg",
    cta: "Emergency Response",
    icon: <LocalShipping fontSize="large" />,
  },
  {
    title: "Drilling & Offshore Waste Management",
    description: "Compliant treatment and disposal solutions for drilling waste and offshore operations",
    image: "/images/drilling.jpg",
    cta: "Waste Solutions",
    icon: <Dangerous fontSize="large" />,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        width: "100%",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Current Slide */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: theme.spacing(4),
          transition: "background-image 0.5s ease",
        }}
      >
        {slides[currentSlide].icon && (
          <Box
            sx={{
              fontSize: "4rem",
              mb: 2,
              color: theme.palette.secondary.main,
            }}
          >
            {slides[currentSlide].icon}
          </Box>
        )}
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {slides[currentSlide].title}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          {slides[currentSlide].description}
        </Typography>
        <Button variant="contained" size="large" color="secondary">
          {slides[currentSlide].cta}
        </Button>
      </Box>

      {/* Navigation Arrows */}
      <KeyboardArrowLeft
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "3rem",
          cursor: "pointer",
          "&:hover": { color: theme.palette.secondary.main },
        }}
      />
      <KeyboardArrowRight
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "3rem",
          cursor: "pointer",
          "&:hover": { color: theme.palette.secondary.main },
        }}
      />

      {/* Slide Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor:
                currentSlide === index ? theme.palette.secondary.main : "white",
              cursor: "pointer",
              opacity: currentSlide === index ? 1 : 0.5,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSlider;