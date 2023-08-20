import { FilterButton } from "./components/FilterButton";
import ItemLeft from "./components/ItemLeft";
import ItemRight from "./components/ItemRight";
import './styles.css'

const FilterToDo = ({ theme, tasks, onClickAll, onClickIncompleted, onClickCompleted, OnClickClear, isActive }) => {

  // Contador de tareas
  const Counter = () => {
    return tasks.length;
  };

  const filterActive = () => {
    // Verifica qué filtro está activo y devuelve la clase correspondiente.
    const activeClass = isActive.all ? 'filterOn' : 'filterOff';
    const activeClassIncompleted = isActive.incompleted ? 'filterOn' : 'filterOff';
    const activeClassCompleted = isActive.completed ? 'filterOn' : 'filterOff';

    return { all: activeClass, incompleted: activeClassIncompleted, completed: activeClassCompleted };
  }

  const activeClasses = filterActive();

  return (
    <div className={`footer__container ${theme}`}>
      <ItemLeft counter={Counter} />

      <div className="filters__container">
        <FilterButton action={onClickAll} filter='All' active={activeClasses.all} />
        <FilterButton action={onClickIncompleted} filter='Active' active={activeClasses.incompleted} />
        <FilterButton action={onClickCompleted} filter='Completed' active={activeClasses.completed} />
      </div>

      <ItemRight action={OnClickClear} />
    </div>
  );
}

export default FilterToDo;
