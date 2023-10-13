const ItemLeft = ({ Counter }) => {

  return (
    <div className="item_left__container">
      <p className="filters__item_left">
        {Counter()} items left
      </p>
    </div>
  );
}

export default ItemLeft;