import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../app/reducers/todo/todoSlice";

const AddToDoInput = () => {
  const [content, setContent] = useState();
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(content));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddToDoInput;
