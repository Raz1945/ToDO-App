import './styles.css'
import LabelToDo from "../LabelToDo/LabelToDo";

// ListToDo --> devuelve cada una de las tareas y las muestra en pantalla
export const ListToDo = ({ tasks, theme, deleteToDo }) => {
  return (
    <div className={`list__container ${theme}`}>
      {tasks.map(todo => {
        return (
          <LabelToDo
            key={todo.id}
            text={todo.content}
            theme={theme}
            deleteToDo={deleteToDo}
            id={todo.id}
          />
        )
      })}
    </div>
  );
};