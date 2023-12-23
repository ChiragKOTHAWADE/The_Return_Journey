// api.js - this is a hypothetical module that handles API requests

async function getTodos() {
    // Make an API request to get todos
    // For simplicity, let's assume it returns a Promise that resolves with the data
    const response = await fetch('/todos');
    const data = await response.json();
    return data;
  }
  
  async function addTodo(todo) {
    // Make an API request to add a new todo
    // For simplicity, let's assume it returns a Promise that resolves with the added todo
    const response = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const addedTodo = await response.json();
    return addedTodo;
  }
  
  module.exports = { getTodos, addTodo };
  