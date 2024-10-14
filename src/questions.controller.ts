import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { GetQuestionsDto } from './dto/get-questions.dto';
import { CreateQuestionsDto } from './dto/create-questions.dto';

@Controller('quiz')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('questions')
  getQuestions(@Query() { topics, count }: GetQuestionsDto) {
    return this.questionsService.getQuestions(topics, count);
  }

  @Post('questions')
  createQuestions(@Body() body: CreateQuestionsDto) {
    return this.questionsService.createQuestions(body.questions);
  }

  @Get('topics')
  getTopics() {
    return this.questionsService.getTopics();
  }

  @Post('question')
  createQuestion(@Body() newQuestion: CreateQuestionDto) {
    return this.questionsService.createQuestion(newQuestion);
  }
}
