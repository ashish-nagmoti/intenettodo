import { Body, Controller, Delete, Get, Param, Patch, Post } from '@intentjs/core';
import { TodoService } from 'app/services/todo';
import { TodoModel } from 'app/models/todoModel';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(@Body() data: Partial<TodoModel>) {
    console.log('Create Todo:', data);
    return this.todoService.createTodo(data);
  }

  @Get()
  async getTodos() {
    console.log('Get Todos');
    return this.todoService.getTodos();
  }

  @Patch(':id')
  async updateTodo(@Param('id') id: string, @Body() data: Partial<TodoModel>) {
    console.log('Update Todo:', id, data);
    await this.todoService.updateTodo(id, data);
    return { success: true };
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    console.log('Delete Todo:', id);
    await this.todoService.deleteTodo(id);
    return { success: true };
  }
}