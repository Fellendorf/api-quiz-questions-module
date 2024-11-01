import { IsString } from 'class-validator';

export class GetQuestionDto {
  @IsString()
  id?: string;
}
