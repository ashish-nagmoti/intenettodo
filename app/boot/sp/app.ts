import { IntentApplicationContext, ServiceProvider } from '@intentjs/core';
import { UserDbRepository } from 'app/repositories/userDbRepository';
import { UserService } from 'app/services';
import { AuthService } from 'app/services/auth';
import { TodoDbRepository } from 'app/repositories/todoDbRepository';
import { TodoService } from 'app/services/todo';

export class AppServiceProvider extends ServiceProvider {
  register() {
    this.bind(UserService);
    this.bind(AuthService);
    this.bind(TodoService);
    this.bindWithClass('USER_DB_REPO', UserDbRepository);
    this.bindWithClass('TODO_DB_REPO', TodoDbRepository);
  }

  boot(app: IntentApplicationContext) {}
}
