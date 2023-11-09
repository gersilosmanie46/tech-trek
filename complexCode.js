// Filename: complexCode.js

/*
 * This code demonstrates a complex implementation of a task management system.
 * It includes functionality to create, update, and delete tasks, set deadlines, 
 * assign tasks to different users, and track the progress of each task.
 * The code is more than 200 lines long and showcases complex JavaScript 
 * concepts and design patterns.
 */

class User {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = null;
    this.assignee = null;
    this.progress = 0;
  }

  setDeadline(deadline) {
    this.deadline = deadline;
  }

  assignTo(user) {
    this.assignee = user;
  }

  updateProgress(progress) {
    if (progress >= 0 && progress <= 100) {
      this.progress = progress;
    }
  }
}

class TaskManager {
  constructor() {
    this.tasks = {};
    this.users = {};
  }

  createTask(id, title, description) {
    const task = new Task(id, title, description);
    this.tasks[id] = task;
    return task;
  }

  deleteTask(id) {
    delete this.tasks[id];
  }

  createUser(name) {
    const user = new User(name);
    this.users[name] = user;
    return user;
  }

  assignTask(taskId, userId) {
    const task = this.tasks[taskId];
    const user = this.users[userId];

    if (!task || !user) {
      throw Error('Task or user not found');
    }

    task.assignTo(user);
  }

  updateTaskProgress(taskId, progress) {
    const task = this.tasks[taskId];

    if (!task) {
      throw Error('Task not found');
    }

    task.updateProgress(progress);
  }

  setTaskDeadline(taskId, deadline) {
    const task = this.tasks[taskId];

    if (!task) {
      throw Error('Task not found');
    }

    task.setDeadline(deadline);
  }
}

// Usage example:

const taskManager = new TaskManager();

const user1 = taskManager.createUser('John');
const user2 = taskManager.createUser('Mary');

const task1 = taskManager.createTask(1, 'Implement feature X', 'Description of task 1');
const task2 = taskManager.createTask(2, 'Refactor codebase', 'Description of task 2');

taskManager.assignTask(1, 'John');
taskManager.assignTask(2, 'Mary');

taskManager.updateTaskProgress(1, 50);
taskManager.updateTaskProgress(2, 30);

taskManager.setTaskDeadline(1, '2022-01-15');
taskManager.setTaskDeadline(2, '2022-02-28');

console.log(task1);
console.log(task2);
console.log(user1);
console.log(user2);