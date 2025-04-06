// src/components/HeroSlider.tsx
import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { ScubaDiving, SettingsRemote } from "@mui/icons-material";

const slides = [
  {
    title: "Offshore Drilling Support",
    description: "Comprehensive solutions for your offshore operations",
    image: "/images/offshore.png",
    cta: "Explore Drilling Services",
  },
  {
    title: "Commercial Diving Services",
    description: "Professional underwater operations with IMCA-certified teams",
    image: "/images/diving.png",
    cta: "View Diving Services",
    icon: <ScubaDiving fontSize="large" />,
  },
  {
    title: "ROV Operations",
    description:
      "Advanced remotely operated vehicles for deepwater inspections",
    image: "/images/rov.png",
    cta: "Explore ROV Capabilities",
    icon: <SettingsRemote fontSize="large" />,
  },
  {
    title: "Pipeline Maintenance",
    description: "Advanced pipeline inspection and repair services",
    image: "/images/pipeline.png",
    cta: "Learn About Maintenance",
  },
  {
    title: "Equipment Rental",
    description: "State-of-the-art equipment for all your needs",
    image: "/images/equip.png",
    cta: "View Equipment",
  },
  {
    title: "Safety Consulting",
    description: "Industry-leading HSE consulting services",
    image: "/images/safety.png",
    cta: "Safety First",
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
