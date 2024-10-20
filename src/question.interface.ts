export interface Question {
  topic: string;
  text: string;
  code?: Code;
  options: string[];
  answer: Answer;
  meta?: Meta;
}

export interface Code {
  text: string;
  language: Language;
}

export interface Answer {
  index: number;
  explanation?: string;
}

export interface Meta {
  reviewed?: boolean;
  difficult?: Difficulty;
}

export const languages = ['typescript', 'javascript', 'html', 'css'] as const;
export type Language = (typeof languages)[number];

export const difficulties = ['easy', 'medium', 'hard'] as const;
export type Difficulty = (typeof difficulties)[number];
