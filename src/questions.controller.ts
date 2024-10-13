import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { GetQuestionsDto } from './dto/get-questions.dto';

@Controller('quiz')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('questions')
  getQuestions(@Query() { topics, count }: GetQuestionsDto) {
    return this.questionsService.getQuestions(topics, count);
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
