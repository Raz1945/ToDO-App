import './styles.css'

const CheckButton = ({ statusClass, statusClassBg, onClick }) => {


  return (
    <div className='check' onClick={onClick}>
      <picture className={`${statusClassBg}`}  >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          className={`${statusClass}`}
        >
          <path d="M1 4.304L3.696 7l6-6" />
        </svg>
      </picture>
    </div>

  );
}

export default CheckButton;