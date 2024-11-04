import { Schema } from 'mongoose';
import {
  Option,
  Code,
  difficulties,
  languages,
  Question,
} from './question.interface';

export const QUESTION_MODEL_NAME = 'Question';

const COLLECTION_NAME = 'quiz-questions';

const OptionSchema = new Schema<Option>({
  text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: false,
    default: false,
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
      trim: true,
    },
    subtopic: {
      type: String,
      required: false,
      trim: true,
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
      type: [OptionSchema],
      required: true,
      _id: false,
    },
    explanation: {
      _id: false,
      type: String,
      required: false,
    },
    reviewed: {
      type: Boolean,
      default: false,
      required: false,
    },
    difficult: {
      type: String,
      enum: difficulties,
      required: false,
      lowercase: true,
    },
  },
  {
    collection: COLLECTION_NAME,
    versionKey: false,
    timestamps: true,
  },
);
