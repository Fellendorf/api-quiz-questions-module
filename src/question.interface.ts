export interface Question {
  topic: string;
  subtopic?: string;
  text: string;
  code?: Code;
  options: Option[];
  explanation?: string;
  links?: string[];
  reviewed?: boolean;
  difficult?: Difficulty;
}

export interface Code {
  text: string;
  language: Language;
}

export interface Option {
  text: string;
  isCorrect?: boolean;
}

export const languages = ['typescript', 'javascript', 'html', 'css'] as const;
export type Language = (typeof languages)[number];

export const difficulties = ['easy', 'medium', 'hard'] as const;
export type Difficulty = (typeof difficulties)[number];
