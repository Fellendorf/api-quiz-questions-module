import { Schema } from 'mongoose';
import {
  Answer,
  Code,
  difficulties,
  languages,
  Meta,
  Question,
} from './question.interface';

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

const MetaSchema = new Schema<Meta>({
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
    meta: {
      _id: false,
      type: MetaSchema,
      requred: false,
    },
  },
  {
    collection: COLLECTION_NAME,
    versionKey: false,
  },
);
