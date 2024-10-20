import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { GetQuestionsDto } from './dto/get-questions.dto';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { DeleteQuestionDTO } from './dto/delete-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('quiz')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('question')
  private createQuestion(@Body() newQuestion: CreateQuestionDto) {
    return this.questionsService.createQuestion(newQuestion);
  }

  @Put('question')
  private updateQuestion(@Body() updatedQuestion: UpdateQuestionDto) {
    return this.questionsService.updateQuestion(updatedQuestion);
  }

  @Delete('question')
  private deleteQuestion(@Query() { id }: DeleteQuestionDTO) {
    return this.questionsService.deleteQuestion(id);
  }

  @Get('questions')
  private getQuestions(@Query() { topics, count }: GetQuestionsDto) {
    return this.questionsService.getQuestions(topics, count);
  }

  @Post('questions')
  private createQuestions(@Body() body: CreateQuestionsDto) {
    return this.questionsService.createQuestions(body.questions);
  }

  @Get('topics')
  private getTopics() {
    return this.questionsService.getTopics();
  }
}
