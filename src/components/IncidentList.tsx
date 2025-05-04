import React from "react";
import { Incident } from "../data/mockData";
import IncidentCard from "./IncidentCard";

interface Props {
  incidents: Incident[];
}

const IncidentList: React.FC<Props> = ({ incidents }) => {
  if (incidents.length === 0) return <p>No incidents found.</p>;

  return (
    <div className="incident-list">
      {incidents.map((i) => (
        <IncidentCard key={i.id} incident={i} />
      ))}
    </div>
  );
};

export default IncidentList;
