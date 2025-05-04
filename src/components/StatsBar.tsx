import React from "react";
import { Incident } from "../data/mockData";

interface Props {
  incidents: Incident[];
}

const StatsBar: React.FC<Props> = ({ incidents }) => {
  const total = incidents.length;
  const low = incidents.filter(i => i.severity === 'Low').length;
  const medium = incidents.filter(i => i.severity === 'Medium').length;
  const high = incidents.filter(i => i.severity === 'High').length;

  return (
    <div className="stats-bar">
      <h2>📊 Incident Summary</h2>
      <div className="stats">
        <span>Total: {total}</span>
        <span className="low">Low: {low}</span>
        <span className="medium">Medium: {medium}</span>
        <span className="high">High: {high}</span>
      </div>
    </div>
  );
};

export default StatsBar;
