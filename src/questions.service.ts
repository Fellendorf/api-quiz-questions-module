import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, PipelineStage } from 'mongoose';

import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.interface';
import { QUESTION_MODEL_NAME } from './question.schema';
import { UpdateQuestionDto } from './dto/update-question.dto';

type Topic = {
  name: string;
  questionCount: number;
};

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(QUESTION_MODEL_NAME)
    private readonly questionModel: Model<Question>,
  ) {}

  public async createQuestion(newQuestion: CreateQuestionDto) {
    await this.questionModel.insertMany([newQuestion]);
    return {
      message: 'Question was created successfully',
    };
  }

  public async updateQuestion(updatedQuestion: UpdateQuestionDto) {
    await this.questionModel.updateOne(
      { _id: updatedQuestion._id },
      updatedQuestion,
    );

    return {
      message: 'Question was updated successfully',
    };
  }

  public async deleteQuestion(id: string) {
    const result = await this.questionModel.findByIdAndDelete(id);
    return {
      message: result
        ? 'Question was deleted successfully'
        : 'Question was not found',
    };
  }

  public async getQuestions(
    topics?: string[],
    count?: number,
  ): Promise<Question[]> {
    const pipelineStage: PipelineStage[] = [];

    if (topics?.length > 0) {
      pipelineStage.push({ $match: { topic: { $in: topics } } });
    }
    if (count > 0) {
      pipelineStage.push({ $sample: { size: count } });
    }
    pipelineStage.push({ $sort: { text: -1 } });
    return this.questionModel.aggregate(pipelineStage);
  }

  public async createQuestions(newQuestions: CreateQuestionDto[]) {
    await this.questionModel.insertMany(newQuestions);
    return {
      message: `${newQuestions.length} questions were created successfully`,
    };
  }

  public async getTopics(): Promise<Topic[]> {
    return this.questionModel
      .aggregate([
        { $group: { _id: '$topic', count: { $count: {} } } },
        { $project: { _id: 0, name: '$_id', questionCount: '$count' } },
      ])
      .then((topics: Topic[]) =>
        topics.sort((a, b) => a.name.localeCompare(b.name)),
      );
  }
}
