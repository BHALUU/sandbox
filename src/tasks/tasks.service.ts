import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    await this.taskRepository.persistAndFlush(task);
    return task;
  }

  findAll() {
    return this.taskRepository.findAll();
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne({ id });
    task.name = updateTaskDto.name ?? task.name;
    task.description = updateTaskDto.description ?? task.description;
    task.status = updateTaskDto.status ?? task.status;
    return this.taskRepository.flush();
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOne({ id });
    return this.taskRepository.removeAndFlush(task);
  }
}
