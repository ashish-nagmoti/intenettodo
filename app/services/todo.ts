import { Injectable, Inject } from '@intentjs/core';
import { TodoDbRepository } from 'app/repositories/todoDbRepository';
import { TodoModel } from 'app/models/todoModel';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_DB_REPO') private readonly todos: TodoDbRepository,
  ) {}

  async createTodo(data: Partial<TodoModel>): Promise<TodoModel> {
    return this.todos.create(data);
  }

  async getTodos(): Promise<TodoModel[]> {
    return this.todos.all();
  }

  async updateTodo(id: string, data: Partial<TodoModel>): Promise<void> {
    await this.todos.updateWhere({ id }, data);
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todos.deleteWhere({ id });
  }
}