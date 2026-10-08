import {
  BarChart3,
  Briefcase,
  FileText,
  GraduationCap,
  MessageSquare,
  Rocket,
  Route,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Target,
    title: "Skill-to-role matching",
    description:
      "Map what you already know to careers where it counts, ranked by how well you fit.",
  },
  {
    icon: BarChart3,
    title: "Skill gap analysis",
    description:
      "See exactly which skills stand between you and a target role, and which matter most.",
  },
  {
    icon: Route,
    title: "Personalized roadmap",
    description:
      "Get a step-by-step plan of courses, projects and milestones paced to your timeline.",
  },
  {
    icon: FileText,
    title: "Resume insights",
    description:
      "Understand how your resume reads for a given role and where to strengthen it.",
  },
  {
    icon: Briefcase,
    title: "Compare career paths",
    description:
      "Put two or three roles side by side: skills, growth outlook and day-to-day work.",
  },
  {
    icon: MessageSquare,
    title: "Interview readiness",
    description:
      "Know what to prepare for each role, from core concepts to common questions.",
  },
];

export interface Step {
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    title: "Tell us about you",
    description:
      "Share your skills, interests, projects and goals. It takes a few minutes, not a few hours.",
  },
  {
    title: "Explore your matches",
    description:
      "Review careers that fit your profile, with clear reasons and the gaps to close.",
  },
  {
    title: "Follow your roadmap",
    description:
      "Turn your chosen direction into weekly actions and track your progress as you go.",
  },
];

export interface Audience {
  icon: LucideIcon;
  title: string;
  tagline: string;
  points: string[];
}

export const AUDIENCES: Audience[] = [
  {
    icon: GraduationCap,
    title: "Pre-final-year students",
    tagline: "Explore early, with time on your side.",
    points: [
      "Discover roles you haven't considered",
      "Pick electives, projects and internships with purpose",
      "Build skills before placement season",
    ],
  },
  {
    icon: Target,
    title: "Final-year students",
    tagline: "Focus your effort where it counts.",
    points: [
      "Narrow down to a few strong target roles",
      "Close your highest-impact skill gaps",
      "Prepare for interviews with a plan",
    ],
  },
  {
    icon: Rocket,
    title: "Fresh graduates",
    tagline: "Move from uncertain to intentional.",
    points: [
      "Reframe your degree for the roles you want",
      "Compare paths before committing",
      "Get a clear plan for your first move",
    ],
  },
];

export interface MatchSample {
  role: string;
  score: number;
}

/** Sample data for illustrative previews only. */
export const SAMPLE_MATCHES: MatchSample[] = [
  { role: "Data Analyst", score: 92 },
  { role: "Product Analyst", score: 86 },
  { role: "Business Analyst", score: 81 },
];

export const SAMPLE_SKILLS = ["Python", "SQL", "Statistics", "Excel", "Communication"];

export interface SkillGapSample {
  skill: string;
  current: number;
  needed: number;
}

export const SAMPLE_GAPS: SkillGapSample[] = [
  { skill: "SQL", current: 70, needed: 85 },
  { skill: "Data visualization", current: 45, needed: 80 },
  { skill: "Statistics", current: 60, needed: 75 },
  { skill: "Storytelling with data", current: 35, needed: 70 },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "Who is CareerCompass AI for?",
    answer:
      "Pre-final-year students, final-year students and fresh graduates who want a clearer view of which careers fit them and how to get there.",
  },
  {
    question: "What if I don't know what I want to do yet?",
    answer:
      "That's the ideal starting point. You begin with your skills and interests, and CareerCompass AI shows you directions worth exploring.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just an idea of your skills, subjects you enjoy and what you'd like from a career. A resume helps but isn't required.",
  },
  {
    question: "Will it tell me exactly what job to take?",
    answer:
      "No. It gives you ranked options, the reasoning behind them and a plan, so the final decision stays yours.",
  },
  {
    question: "Is this the finished product?",
    answer:
      "This is an early prototype built for a hackathon. The content and previews you see here are static samples.",
  },
];
