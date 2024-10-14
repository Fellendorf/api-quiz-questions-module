import { Schema } from 'mongoose';
import { Answer, Code, languages, Question } from './question.interface';

export const QUESTION_MODEL_NAME = 'Question';

const COLLECTION_NAME = 'quiz-questions';

const AnswerSchema = new Schema<Answer>({
  index: {
    type: Number,
    required: true,
  },
  explanation: {
    type: String,
    required: false,
  },
});

const CodeSchema = new Schema<Code>({
  text: { type: String, required: true },
  language: {
    type: String,
    enum: languages,
    required: true,
    lowercase: true,
  },
});

export const QuestionSchema = new Schema<Question>(
  {
    topic: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    code: {
      _id: false,
      required: false,
      type: CodeSchema,
    },
    options: {
      type: [String],
      required: true,
    },

    answer: {
      _id: false,
      type: AnswerSchema,
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
  },
);
