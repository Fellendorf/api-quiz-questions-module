import { IsString } from 'class-validator';

export class DeleteQuestionDTO {
  @IsString()
  id: string;
}
