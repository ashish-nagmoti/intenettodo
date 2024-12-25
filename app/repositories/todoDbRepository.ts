import { DatabaseRepository, Injectable, InjectModel } from '@intentjs/core';
import { TodoModel } from 'app/models/todoModel';

@Injectable()
export class TodoDbRepository extends DatabaseRepository<TodoModel> {
  @InjectModel(TodoModel)
  model: TodoModel;
}