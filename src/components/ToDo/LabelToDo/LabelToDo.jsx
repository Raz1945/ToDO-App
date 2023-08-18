import './styles.css'
import { useState } from "react";
import { RxCross1 } from 'react-icons/rx'
import CheckButton from '../CheckButton/CheckButton';

const LabelToDo = ({ text, theme, deleteToDo, id }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };
  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  const checkboxClass = isChecked ? 'check-icon checked' : 'check-icon';
  const checkboxBgClass = isChecked ? 'check__container bg-check' : 'check__container';


  return (
    <div
      className="list__ToDo_container"
      id={theme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='list__ToDo_check'>
        <CheckButton
          statusBg={checkboxBgClass}
          status={checkboxClass}
          onClick={handleCheckClick}
        />
      </div>

      <div className="list__ToDo_content">
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
