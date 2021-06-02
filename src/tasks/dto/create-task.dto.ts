import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  name: string;
  description: string;
  status: TaskStatus;
}
