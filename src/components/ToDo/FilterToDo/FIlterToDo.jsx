import { FilterButton } from "./FilterButton";
import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";
import './styles.css'

const FilterToDo = ({ theme, counter = 0 }) => {
  return (
    <div className={`footer__container ${theme}`}>
      <ItemLeft counter={counter} />

      <div className="filters__container">
        <FilterButton action={() => { }} active='All' filter='All' />
        <FilterButton action={() => { }} active='All' filter='Active' />
        <FilterButton action={() => { }} active='All' filter='Completed' />
      </div>

      <ItemRight />

    </div>
  );
}

export default FilterToDo;