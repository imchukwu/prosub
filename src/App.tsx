import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import EquipmentPage from "./pages/EquipmentRental";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HydrographicSurvey from "./pages/HydrographicSurvey";
import Procurement from "./pages/Procurement";
import OffshoreFumigation from "./pages/OffshoreFumigation";
import EquipmentRental from "./pages/EquipmentRental";
import EnvironmentalContainment from "./pages/EnvironmentalContainment";
import WasteManagement from "./pages/WasteManagement";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003366", // Deep blue common in oil industry
    },
    secondary: {
      main: "#FFA500", // Safety orange accent
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/hydrographic" element={<HydrographicSurvey />} />
          <Route path="/services/fumigation" element={<OffshoreFumigation />} />
          <Route path="/services/procurement" element={<Procurement />} />
          <Route path="/services/diving-rov" element={<EquipmentRental />} />
          <Route path="/services/oil-spill" element={<EnvironmentalContainment />} />
          <Route path="/services/drilling" element={<WasteManagement />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
