import { useState } from 'react';
import CheckButton from '../CheckButton/CheckButton';
import './styles.css'

// AddToDoInput --> proporciona una etiqueta y un campo de entrada para que los usuarios agreguen nuevas tarea 
const AddToDoInput = ({ theme, addToDo }) => {

  const [toDoContent, setToDoContent] = useState('');

  const handleToDoInput = (e) => {
    const value = e.target.value;
    setToDoContent(value);
  };

  const handleToDoEnter = (e) => {
    if (e.key === 'Enter') {
      addToDo(toDoContent);
      setToDoContent('');
    }
  };
  return (
    <div className='addToDoWrap'>
      <div className={`addToDoWrap-context ${theme}`}>
        <label htmlFor="addToDo" className="addToDo__control">
          <CheckButton statusClass='check-icon' statusClassBg='check__container' />
          <input
            type="text"
            id="addToDo"
            placeholder="Create a new todo..."
            className="addToDo__text"
            value={toDoContent}
            onChange={handleToDoInput}
            onKeyDown={handleToDoEnter}
          />
        </label >
      </div>
    </div>

  );
}

export default AddToDoInput;