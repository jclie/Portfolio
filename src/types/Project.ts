export type Project = {
  id: number;
  title: string;
  year?: number;

  startDate?: string;
  endDate?: string;

  category: string;
  description: string;
  technologies: string[];

  image?: string;
  slug: string;

  featured?: boolean;

  status?: "complete" | "in-progress" | "prototype";

  role?: string;
  teamProject?: boolean;

  github?: string;
  liveUrl?: string;

  overview?: string;
  highlights?: string[];
  challenges?: string[];

  visible?: boolean;
};