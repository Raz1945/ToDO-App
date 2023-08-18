import { useState } from "react"; 
import { FilterButton } from "./components/FilterButton";
import ItemLeft from "./components/ItemLeft";
import ItemRight from "./components/ItemRight";
import './styles.css'

const FilterToDo = ({ theme, tasks }) => {
  const [showCompleted, setShowCompleted] = useState(false); // Estado para mostrar tareas completadas

  const Counter = () => {
    return tasks.length;
  };

  const OnCLickCompleted = () => {
    const checkedToDos = tasks.filter(todo => todo.checked)
    console.log('tareas finalizadas:', checkedToDos)
    setShowCompleted(true); // Actualizar el estado para mostrar tareas completadas
  }
  const filteredTasks = showCompleted ? tasks.filter(todo => todo.checked) : tasks; // Filtrar tareas según el estado




  return (
    <div className={`footer__container ${theme}`}>
      <ItemLeft counter={Counter} />

      <div className="filters__container">
        <FilterButton action={() => { }} active='All' filter='All' />
        <FilterButton action={() => { }} active='All' filter='Active' />
        {/* <FilterButton action={() => { }} active='All' filter='Completed' /> */}
        <FilterButton action={(OnCLickCompleted)} active='All' filter='Completed' />
      </div>

      <ItemRight />

    </div>
  );
}

export default FilterToDo;