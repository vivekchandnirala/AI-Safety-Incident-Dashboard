import React from "react";
import { Incident } from "../data/mockData";

interface Props {
  incident: Incident;
}

const IncidentCard: React.FC<Props> = ({ incident }) => {
  const formattedDate = new Date(incident.reported_at).toLocaleDateString();

  return (
    <div className="incident-card">
      <div className="header">
        <h3>{incident.title}</h3>
        <span className={`badge ${incident.severity.toLowerCase()}`}>
          {incident.severity}
        </span>
      </div>
      <p className="description">{incident.description}</p>
      <p className="date">📅 {formattedDate}</p>
    </div>
  );
};

export default IncidentCard;
