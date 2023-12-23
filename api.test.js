// api.test.js

const { getTodos, addTodo } = require('./api');

describe('API Tests', () => {
  describe('GET /todos', () => {
    test('should get a list of todos successfully', async () => {
      const todos = await getTodos();
      expect(todos).toBeDefined();
      expect(Array.isArray(todos)).toBe(true);
    });

    // Add more scenarios for error handling if needed
    test('should handle errors when getting todos', async () => {
      // Mocking the fetch function to simulate an error
      global.fetch = jest.fn(() => Promise.reject('Error fetching todos'));

      await expect(getTodos()).rejects.toEqual('Error fetching todos');
    });
  });

  describe('POST /todos', () => {
    test('should add a new todo successfully', async () => {
      const newTodo = { text: 'Buy groceries', completed: false };
      const addedTodo = await addTodo(newTodo);
      expect(addedTodo).toBeDefined();
      expect(addedTodo.text).toBe(newTodo.text);
      expect(addedTodo.completed).toBe(newTodo.completed);
    });

    // Add more scenarios for error handling if needed
    test('should handle errors when adding a new todo', async () => {
      // Mocking the fetch function to simulate an error
      global.fetch = jest.fn(() => Promise.reject('Error adding todo'));

      const newTodo = { text: 'Buy groceries', completed: false };
      await expect(addTodo(newTodo)).rejects.toEqual('Error adding todo');
    });
  });
});
