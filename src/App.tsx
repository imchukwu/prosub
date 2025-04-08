import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import EquipmentPage from "./pages/EquipmentPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CommercialDiving from "./pages/CommercialDiving";
import ROVOperations from "./pages/ROVOperations";
import OffshoreConstruction from "./pages/OffshoreConstruction";
import PipelineServices from "./pages/PipelineServices";
import MarineSupport from "./pages/MarineSupport";
import HSEConsulting from "./pages/HSEConsulting";
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
          <Route path="/services/diving" element={<CommercialDiving />} />
          <Route path="/services/rov" element={<ROVOperations />} />
          <Route path="/services/construction" element={<OffshoreConstruction />} />
          <Route path="/services/pipeline" element={<PipelineServices />} />
          <Route path="/services/marine" element={<MarineSupport />} />
          <Route path="/services/hse" element={<HSEConsulting />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
