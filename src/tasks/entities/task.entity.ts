import {
  BaseEntity,
  Entity,
  Enum,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity()
export class Task extends BaseEntity<Task, 'id'> {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  description: string;

  @Enum(() => TaskStatus)
  status: TaskStatus = TaskStatus.OPEN;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
