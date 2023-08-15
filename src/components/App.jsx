import { useState, createContext } from "react";
import Header from "./Header/Header";
import AppWrap from "./AppWrap/AppWrap";
import AddToDoInput from "./ToDo/AddToDoInput/AddToDoInput";
import { todos } from "../data/todos";
import { ListToDo } from "./ToDo/ListToDo/ListToDo";
import FilterToDo from "./ToDo/FilterToDo/FIlterToDo";

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState('light')
  const [toDos, setToDos] = useState(todos)

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
      completed: false
    };

    const toDoList = [...toDos];
    toDoList.push(newToDo);
    // console.log('Nueva tarea creada:',newToDo) //? Verifico que se ingresa una nueva tarea
    setToDos(toDoList);

  };

  // Eliminar una tarea especifica
  const deleteToDo = (id) => {
    const updatedToDos = toDos.filter(todo => todo.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AppWrap theme={theme}>

          <Header theme={theme} setTheme={toggleTheme} />
          <AddToDoInput theme={theme} addToDo={addToDo} />
          <ListToDo tasks={toDos} theme={theme} deleteToDo={deleteToDo} />
          <FilterToDo theme={theme}/>

        </AppWrap>
      </ThemeContext.Provider>
    </>
  );
}

export default App;