// src/pages/HomePage.tsx
import { Box } from '@mui/material';
import HeroSlider from '../components/HeroSlider';
import CompanyOverview from '../components/CompanyOverview';
import KeyDifferentiators from '../components/KeyDifferentiators';
import CallToAction from '../components/CallToAction';
// import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: 1 }}>
        <HeroSlider />
        <CompanyOverview />
        <KeyDifferentiators />
        <CallToAction />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default HomePage;