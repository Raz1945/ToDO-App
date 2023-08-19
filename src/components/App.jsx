import { useState, createContext, useEffect } from "react";
import { todos } from "../data/todos";
import AppWrap from "./AppWrap/AppWrap";
import Header from "./Header/Header";
import AddToDoInput from "./ToDo/AddToDoInput/AddToDoInput";
import { ListToDo } from "./ToDo/ListToDo/ListToDo";
import FilterToDo from "./ToDo/FilterToDo/FIlterToDo";

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState('light')
  const [toDos, setToDos] = useState(todos)
  const [newTask, setNewTask] = useState([]); // Estado para almacenar datos actualizados
  const [, setShowCompleted] = useState(false);
  const [, setShowIncompleted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Agrega una nueva tarea
  const addToDo = (content) => {
    const lastId = toDos.length > 0 ? toDos[toDos.length - 1].id : 1;

    const regex = /^\s*$/; // Expresión regular para verificar espacios en blanco 

    if (regex.test(content)) {
      return; // Verifica que 'content' no este compuesto solamente de espacios en blanco
    }
    const newToDo = {
      id: lastId + 1,
      content,
      status: false
    };

    const toDoList = [...toDos];
    toDoList.push(newToDo);
    // console.log('Nueva tarea creada:',newToDo) //? Verifico que se ingresa una nueva tarea
    // console.log('la cantidad actual es:',toDoList) //? Verifico que la cantidad de tareas
    setToDos(toDoList);
  };

  // Eliminar una tarea especifica
  const deleteToDo = (id) => {
    const deletetask = toDos.filter(todo => todo.id !== id);
    setToDos(deletetask);
  };

  // Cambia el status de una tarea especifica
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
    // console.log('Cambio el estado de:',id) //? Verifico que cambie correctamente el estado
    setToDos(updatedToDos);
  };

  // Almacenar los datos en el estado
  const handleNewTask = (toDos) => {
    setNewTask(toDos);
  };

  // Todas las tareas
  const onClickAll = () => {
    handleNewTask(toDos);
    setShowCompleted(false); // Me aseguro de que no se muestren las tareas completadas
    setShowIncompleted(false); // Me aseguro de que no se muestren las tareas incompletas
  };

  // Tareas Completadas
  const onClickCompleted = () => {
    const newTask = toDos.filter((todo) => todo.status);
    handleNewTask(newTask);
    setShowCompleted(true);
  };

  // Tareas Incompletas osea Activas
  const onClickIncompleted = () => {
    const newTask = toDos.filter((todo) => !todo.status);
    handleNewTask(newTask);
    setShowIncompleted(true);
  };

  const OnClickClear = () => {
    const toDelete = toDos.filter((todo) => !todo.status)
    console.log('tareas eliminadas con exito')
    setToDos(toDelete)

  }
  // Renderiza cada vez que toDos sea cambiado
  useEffect(() => {
    handleNewTask(toDos);
  }, [toDos])

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AppWrap theme={theme}>
          <Header theme={theme} setTheme={toggleTheme} />
          <AddToDoInput theme={theme} addToDo={addToDo} />
          <ListToDo theme={theme} tasks={toDos} newTask={newTask} deleteToDo={deleteToDo} updateToDo={updateToDo} />

          <FilterToDo theme={theme} tasks={toDos}
            onClickAll={onClickAll}
            onClickIncompleted={onClickIncompleted}
            onClickCompleted={onClickCompleted}
            OnClickClear={OnClickClear}
          />
        </AppWrap>
      </ThemeContext.Provider>
    </>
  );
}

export default App;