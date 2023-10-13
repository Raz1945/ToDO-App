import CheckButton from '../../CheckButton/CheckButton';
import LabelToDoText from './LabelToDo.Text';
import { RxCross1 } from 'react-icons/rx';

const Label = ({ text, status, handleCheckClick, showIcon, id, deleteToDo }) => {
  const checkboxText = status ? 'text__check-check' : 'text__check-normal';
  const checkboxClass = status ? 'check-icon checked' : 'check-icon';
  const checkboxBgClass = status ? 'check__container bg-check' : 'check__container border';

  return (
    <div className='list__ToDo_check'>
      <CheckButton statusClass={checkboxClass} statusClassBg={checkboxBgClass} onClick={handleCheckClick} />
      <LabelToDoText text={text} statusText={checkboxText} />
      {showIcon && (
        <div className='button-container'>
          <button className="button-mark" onClick={() => deleteToDo(id)}>
            <RxCross1 size={15} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Label;
