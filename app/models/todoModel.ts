import { BaseModel } from '@intentjs/core';

export class TodoModel extends BaseModel {
  static tableName = 'todos';

  id?: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}