const ItemLeft = ({ counter }) => {

  return (
    <div className="item_left__container">
      <p className="filters__item_left">
        {counter()} items left
      </p>
    </div>
  );
}

export default ItemLeft;