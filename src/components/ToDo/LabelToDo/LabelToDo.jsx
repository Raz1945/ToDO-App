import './styles.css'
import { useState } from "react";
import { RxCross1 } from 'react-icons/rx'

const LabelToDo = ({ text, theme, deleteToDo, id }) => {
  const [showIcon, setShowIcon] = useState(false);
  const handleMouseEnter = () => {
    setShowIcon(true);
  };
  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  return (
    <div
      className="list__ToDo_container"
      id={theme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="list__ToDo_content">
        <input type="checkbox" name="checkbox" /> {/* //todo Cambiar por un boton y estilar  */}
        <p className="list__ToDo_text">{text}</p>
      </div>

      {(showIcon) && (
        <div className='button-container'>
          <button className="button-mark">
            <RxCross1
              size={15}
              onClick={() => deleteToDo(id)}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default LabelToDo;
