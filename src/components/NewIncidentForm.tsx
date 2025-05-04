import React, { useState } from "react";
import { Incident } from "../data/mockData";

interface Props {
  onAdd: (incident: Incident) => void;
}

const NewIncidentForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [severity, setSeverity] = useState<"Low" | "Medium" | "High">("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc) return alert("Fill all fields");

    onAdd({
      id: Date.now(),
      title,
      description: desc,
      severity,
      reported_at: new Date().toISOString(),
    });

    setTitle("");
    setDesc("");
    setSeverity("Low");
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Incident</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
      <select value={severity} onChange={(e) => setSeverity(e.target.value as any)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewIncidentForm;
