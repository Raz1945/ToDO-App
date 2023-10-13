import { useState, createContext, useEffect } from "react";
import { todos } from "../data/todos";
import AppWrap from "./AppWrap/AppWrap";
import Header from "./Header/Header";
import AddToDoInput from "./ToDo/AddToDoInput/AddToDoInput";
import { ListToDo } from "./ToDo/ListToDo/ListToDo";
import FilterToDo from "./ToDo/FilterToDo/FIlterToDo";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');
  const [toDos, setToDos] = useState(todos);
  const [newTask, setNewTask] = useState([]); // Estado para almacenar datos actualizados
  const [FisActive, setIsActive] = useState({ all: true, incompleted: false, completed: false });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Agrega una nueva tarea
  const addToDo = (content) => {
    const lastId = toDos.length > 0 ? toDos[toDos.length - 1].id : 1;

    const regex = /^\s*$/; // Expresión regular para verificar espacios en blanco 

    if (regex.test(content)) {
      return; // Verifica que 'content' no esté compuesto solamente de espacios en blanco
    }
    const newToDo = {
      id: lastId + 1,
      content,
      status: false
    };

    const toDoList = [...toDos];
    toDoList.push(newToDo);
    setToDos(toDoList);
  };

  // Eliminar una tarea específica
  const deleteToDo = (id) => {
    const deletetask = toDos.filter(todo => todo.id !== id);
    setToDos(deletetask);
  };

  // Cambia el status de una tarea específica
  const updateToDo = (id) => {
    const updatedToDos = toDos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status
        };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  // Contador de tareas
  const Counter = () => {
    const contador = toDos.filter((todos) => !todos.status).length
    return contador
  }

  // Almacena los datos en el estado
  const handleNewTask = (toDos) => {
    setNewTask(toDos);
  };

  // Todas las tareas
  const onClickAll = () => {
    handleNewTask(toDos);
    setIsActive({ all: true, incompleted: false, completed: false });
  };

  // Tareas Completadas
  const onClickCompleted = () => {
    const newTask = toDos.filter((todo) => todo.status);
    handleNewTask(newTask);
    setIsActive({ all: false, incompleted: false, completed: true });
  };

  // Tareas Incompletas osea Activas
  const onClickIncompleted = () => {
    const newTask = toDos.filter((todo) => !todo.status);
    handleNewTask(newTask);
    setIsActive({ all: false, incompleted: true, completed: false });
  };

  // Elimina todas las tareas completadas
  const OnClickClear = () => {
    const toDelete = toDos.filter((todo) => !todo.status);
    setToDos(toDelete);
  };

  // Renderiza cada vez que toDos sea cambiado
  useEffect(() => {
    handleNewTask(toDos);
  }, [toDos]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AppWrap theme={theme}>
          <Header theme={theme} setTheme={toggleTheme} />
          <AddToDoInput theme={theme} addToDo={addToDo} />
          <ListToDo theme={theme} tasks={toDos} newTask={newTask} deleteToDo={deleteToDo} updateToDo={updateToDo} />
          <FilterToDo
            theme={theme}
            Counter={Counter}
            onClickAll={onClickAll}
            onClickIncompleted={onClickIncompleted}
            onClickCompleted={onClickCompleted}
            OnClickClear={OnClickClear}
            isActive={FisActive}
          />
        </AppWrap>
      </ThemeContext.Provider>
    </>
  );
}

export default App;