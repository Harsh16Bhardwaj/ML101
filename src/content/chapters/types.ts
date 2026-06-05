import type { LucideIcon } from "lucide-react";

export type ChapterStatus = "curated" | "template";

export type RetentionBlock = {
  remember: string;
  showsUp: string;
  oneLiner: string;
};

export type CaseStudyVisual =
  | "ruleDecay"
  | "learningTypes"
  | "dataRepresentativeness"
  | "fitGeneralization";

export type CaseStudy = {
  title: string;
  context: string;
  whyItMatters: string;
  pitfall: string;
  takeaway: string;
  visual?: CaseStudyVisual;
};

export type CodeExample = {
  title: string;
  language: string;
  code: string;
  highlights?: string[];
  notes: string[];
};

export type ComparisonTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type NoteSection = {
  id: string;
  eyebrow: string;
  title: string;
  coreIdea: string;
  theory: string[];
  examples: string[];
  useCases: string[];
  traps: string[];
  caseStudies?: CaseStudy[];
  codeExamples?: CodeExample[];
  tables?: ComparisonTable[];
  retention: RetentionBlock;
};

export type RecallCard = {
  prompt: string;
  answer: string;
};

export type PracticePrompt = {
  title: string;
  prompt: string;
};

export type Chapter = {
  number: number;
  slug: string;
  title: string;
  pages: string;
  status: ChapterStatus;
  accent: string;
  iconName:
    | "Radar"
    | "Workflow"
    | "BadgeCheck"
    | "TrendingUp"
    | "Network"
    | "GitBranch"
    | "Layers3"
    | "Shrink"
    | "ScanSearch"
    | "BrainCircuit"
    | "Gauge"
    | "Box"
    | "Database"
    | "Eye"
    | "Waves"
    | "MessageSquareText"
    | "Sparkles"
    | "Gamepad2"
    | "Cloud";
  summary: string;
  sections: NoteSection[];
  reviewSnippets: string[];
  recallCards: RecallCard[];
  practicePrompts: PracticePrompt[];
};

export type ChapterNavItem = Pick<
  Chapter,
  "number" | "slug" | "title" | "status" | "accent" | "iconName"
>;

export type ChapterIconMap = Record<Chapter["iconName"], LucideIcon>;
