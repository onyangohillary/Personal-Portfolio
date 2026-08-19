export interface NavItem {
  id: string;
  number: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  location?: string;
  type?: string;
  description: string;
  skills?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  tag: string;
  keySkills: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description?: string;
  }[];
}
