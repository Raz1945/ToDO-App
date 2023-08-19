import { useState } from "react";
import { FilterButton } from "./components/FilterButton";
import ItemLeft from "./components/ItemLeft";
import ItemRight from "./components/ItemRight";
import './styles.css'

const FilterToDo = ({ theme, tasks, onClickAll, onClickIncompleted, onClickCompleted, OnClickClear }) => {

  // Contador de tareas
  const Counter = () => {
    return tasks.length;
  };

  const filterActive = () => {
  }

  return (
    <div className={`footer__container ${theme}`}>
      <ItemLeft counter={Counter} />

      <div className="filters__container">
        <FilterButton action={onClickAll} filter='All' active={filterActive} />
        <FilterButton action={onClickIncompleted} filter='Active' active={filterActive} />
        <FilterButton action={onClickCompleted} filter='Completed' active={filterActive} />
      </div>

      <ItemRight action={OnClickClear} />
    </div>
  );
}

export default FilterToDo;
