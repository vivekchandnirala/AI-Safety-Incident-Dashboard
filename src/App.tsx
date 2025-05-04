import React, { useState } from "react";
import "./assets/styles.css";
import { Incident, initialIncidents } from "./data/mockData";
import IncidentList from "./components/IncidentList";
import NewIncidentForm from "./components/NewIncidentForm";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [searchTerm, setSearchTerm] = useState("");

  const addIncident = (newOne: Incident) => {
    setIncidents([newOne, ...incidents]);
  };

  const filtered = incidents.filter((i) =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🛡️ AI Incident Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StatsBar incidents={filtered} />
      <IncidentList incidents={filtered} />
      <NewIncidentForm onAdd={addIncident} />
    </div>
  );
};

export default App;
