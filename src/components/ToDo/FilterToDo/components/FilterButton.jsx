export const FilterButton = ({ action, active, filter }) => {
  return (
    <>
      <button
        className={`filter__button text ${active === filter ? 'text-active' : 'text'}`}
        onClick={action}
      >
        {filter}
      </button>
    </>
  );
};
