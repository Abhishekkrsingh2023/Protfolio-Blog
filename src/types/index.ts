import React from "react";

export interface Project {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  techStack: string[];
  codeUrl: string;
  liveUrl?: string;
  live: boolean;
  role?: string;
  status?: string;
  description?: string;
  features?: string[];
}

export interface UnderBuildProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  startDate: string;
  status: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  summary: string;
  techStack: string[];
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  icon?: React.ReactNode;
}

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}
