import './styles.css';
import { useState } from "react";
import LabelToDoWrap from './components/LabelToDo.Wrap';
import Label from './components/Lable';

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
    updateToDo(id);
  };


  return (
    <LabelToDoWrap enter={handleMouseEnter} leave={handleMouseLeave} theme={theme}>
      <Label
        text={text}
        status={status}
        handleCheckClick={handleCheckClick}
        showIcon={showIcon}
        id={id}
        deleteToDo={deleteToDo}
      />
    </LabelToDoWrap>
  );
};

export default LabelToDo;
