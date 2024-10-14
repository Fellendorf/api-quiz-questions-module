import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { CreateQuestionDto } from './create-question.dto';

export class CreateQuestionsDto {
  @IsArray()
  @ValidateNested()
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}
