import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  Code,
  difficulties,
  Difficulty,
  Language,
  languages,
  Option,
  Question,
} from '../question.interface';
import { Type } from 'class-transformer';

class OptionDTO implements Option {
  @IsString()
  text: string;

  @IsOptional()
  @IsBoolean()
  isCorrect?: boolean;
}

class CodeDTO implements Code {
  @IsString()
  text: string;

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

  @IsOptional()
  @IsString()
  subtopic?: string;

  @IsString()
  text: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  code?: CodeDTO;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionDTO)
  options: OptionDTO[];

  @IsOptional()
  @IsString()
  explanation?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => String)
  links?: string[];

  @IsOptional()
  @IsBoolean()
  reviewed?: boolean;

  @IsOptional()
  @IsEnum(difficulties, {
    message: `difficult must be one of the following values: "${difficulties.join(
      '", "',
    )}"`,
  })
  difficult?: Difficulty;

  /**
   * Note:
   * To validate nested object:
   * - use nested object DTO as a type of the property
   * - use "transformOptions: { enableImplicitConversion: true }" option in the ValidationPipe
   */
}
