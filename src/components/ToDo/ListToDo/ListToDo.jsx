import './styles.css'
import LabelToDo from "../LabelToDo/LabelToDo";

// ListToDo --> devuelve cada una de las tareas y las muestra en pantalla
export const ListToDo = ({ tasks, newTask, theme, deleteToDo, updateToDo }) => {
  return (
    <div className={`list__container ${theme}`}>
      {newTask.length > 0 ? (
        newTask.map(todo => (
          <LabelToDo
            key={todo.id}
            theme={theme}
            id={todo.id}
            text={todo.content}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
            status={todo.status}
          />
        ))
      ) : (
        tasks.map(todo => (
          <LabelToDo
            key={todo.id}
            theme={theme}
            id={todo.id}
            text={todo.content}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
            status={todo.status}

          />
        ))
      )}
    </div>
  );
};