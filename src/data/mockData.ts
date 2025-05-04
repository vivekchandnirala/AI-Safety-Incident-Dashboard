export interface Incident {
    id: number;
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High';
    reported_at: string;
  }
  
  export const initialIncidents: Incident[] = [
    {
      id: 1,
      title: "Algorithmic Discrimination",
      description: "AI flagged resumes from women candidates less frequently than men.",
      severity: "High",
      reported_at: "2025-01-20T11:15:00Z",
    },
    {
      id: 2,
      title: "Voice Assistant Misfire",
      description: "Home assistant turned on heating without command.",
      severity: "Low",
      reported_at: "2025-03-03T08:10:00Z",
    },
    {
      id: 3,
      title: "Inappropriate Content by Chatbot",
      description: "LLM-based bot generated NSFW content when prompted subtly.",
      severity: "High",
      reported_at: "2025-03-25T17:45:00Z",
    },
    {
      id: 4,
      title: "Autonomous Drone Failure",
      description: "Drone used in warehouse crashed into shelves due to sensor misread.",
      severity: "Medium",
      reported_at: "2025-04-12T09:00:00Z",
    },
    {
      id: 5,
      title: "Fake News Generation",
      description: "AI-generated article went viral with misleading health information.",
      severity: "Medium",
      reported_at: "2025-02-18T13:00:00Z",
    }
  ];
  