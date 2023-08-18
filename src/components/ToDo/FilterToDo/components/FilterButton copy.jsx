export const FilterButton = ({ action, active, filter }) => {
  return (
    <>
      <button
        // className={`btn-filter` + (active.includes(filter) ? 'text-active' : 'text')}
        className="filter__button text"
      >
        {filter}
      </button>
    </>
  );
};