import { configureStore } from '@reduxjs/toolkit';
import { addTodo } from './reducers/todo/todoSlice';

const store = configureStore({
  reducer: addTodo,
});

export default store;
