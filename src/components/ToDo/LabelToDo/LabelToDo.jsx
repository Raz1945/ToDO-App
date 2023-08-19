import './styles.css'
import { useState } from "react";
import CheckButton from '../CheckButton/CheckButton';
import LabelToDoText from './components/LabelToDo.Text';
import LabelToDoWrap from './components/LabelToDo.Wrap';
import { RxCross1 } from 'react-icons/rx'

const LabelToDo = ({ text, theme, deleteToDo, updateToDo, id, status }) => {
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };
  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  // Maneja el cambio de status de las tareas
  const handleCheckClick = () => {
     updateToDo(id)
  };

  const checkboxClass = status ? 'check-icon checked' : 'check-icon';
  const checkboxBgClass = status ? 'check__container bg-check' : 'check__container';


  return (
    <LabelToDoWrap enter={handleMouseEnter} leave={handleMouseLeave} theme={theme} >
      <div className='list__ToDo_check'>
        <CheckButton statusClass={checkboxClass} statusClassBg={checkboxBgClass} onClick={handleCheckClick} />
      </div>

      <LabelToDoText text={text} />

      {(showIcon) && (
        <div className='button-container'>
          <button className="button-mark" onClick={() => deleteToDo(id)} >
            <RxCross1 size={15} />
          </button>
        </div>
      )}

    </LabelToDoWrap>
  );
};

export default LabelToDo;
