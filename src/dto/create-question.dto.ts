import {
  IsArray,
  IsEnum,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  Answer,
  Code,
  Language,
  languages,
  Question,
} from '../question.interface';
import { Type } from 'class-transformer';

class AnswerDTO implements Answer {
  @IsNumber()
  index: number;

  @IsOptional()
  @IsString()
  explanation?: string;
}

class CodeDTO implements Code {
  @IsString()
  text: string;

  @IsString()
  @IsEnum(languages, {
    message: `language must be one of the following values: "${languages.join(
      '", "',
    )}"`,
  })
  language: Language;
}

export class CreateQuestionDto implements Question {
  @IsString()
  topic: string;

  @IsString()
  text: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  code?: CodeDTO;

  @IsArray()
  @IsString({ each: true })
  options: string[];

  @IsNotEmptyObject()
  @ValidateNested()
  answer: AnswerDTO;

  /**
   * Note:
   * To validate nested object:
   * - use nested object DTO as a type of the property
   * - use "transformOptions: { enableImplicitConversion: true }" option in the ValidationPipe
   */
}
