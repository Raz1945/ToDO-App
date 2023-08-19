const ItemRight = ({ action }) => {
  return (
    <div className="clear__container" onClick={action}>
      <button className="clear__button">
        Clear Completed
      </button>
    </div>
  );
}

export default ItemRight;