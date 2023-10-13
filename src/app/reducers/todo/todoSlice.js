import { createSlice } from '@reduxjs/toolkit';
import { todos } from '../../../data/todos';

// Estados iniciales
const initialState = {
  todoList: todos,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { id, content, status } = action.payload;
      state.todoList.push({ id, content, status });
    },
    // Otros reducers
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
