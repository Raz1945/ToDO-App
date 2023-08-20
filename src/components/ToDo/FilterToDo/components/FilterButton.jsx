export const FilterButton = ({ action, active, filter }) => {
  return (
    <>
      <button
        className={`filter__button ${active}`}
        onClick={action}
      >
        {filter}
      </button>
    </>
  );
};
