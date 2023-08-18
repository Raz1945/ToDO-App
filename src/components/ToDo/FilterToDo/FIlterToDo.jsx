import { useState } from "react";
import { FilterButton } from "./components/FilterButton";
import ItemLeft from "./components/ItemLeft";
import ItemRight from "./components/ItemRight";
import './styles.css'

const FilterToDo = ({ theme, tasks }) => {
  const [showCompleted, setShowCompleted] = useState(false);

  const Counter = () => {
    return tasks.length;
  };

  const onClickCompleted = () => {
    const checkedToDos = tasks.filter(todo => todo.checked);
    console.log('tareas finalizadas:');

    checkedToDos.forEach(task => {
      console.log(`ID: ${task.id}, Content: ${task.content}`);
    });

    setShowCompleted(true);
  };


  return (
    <div className={`footer__container ${theme}`}>
      <ItemLeft counter={Counter} />

      <div className="filters__container">
        <FilterButton action={() => {}}  filter='All' active='All' />
        <FilterButton action={() => {}} filter='Active' />
        <FilterButton action={onClickCompleted} filter='Completed' />

      </div>

      <ItemRight />
    </div>
  );
}

export default FilterToDo;
