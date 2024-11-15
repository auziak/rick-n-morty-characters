import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// components
import { CardDetails } from "../components/Cards/CardDetails/CardDetails";
import { Navbar } from "../components/Navbar";
// pages
import { CharactersPage } from "../Pages/Characters/CharactersPage";
import { EpisodesPage } from "../Pages/Episodes/EpisodesPage";
import { LocationsPage } from "../Pages/Locations/LocationsPage";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};
