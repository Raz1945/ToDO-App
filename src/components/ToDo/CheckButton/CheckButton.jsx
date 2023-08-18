import './styles.css'

const CheckButton = ({ status, statusBg, onClick }) => {
  return (
    <div className='check' onClick={onClick}>
      <picture className={`${statusBg}`}  >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          className={`${status}`}
          onClick={onClick}
        >
          <path d="M1 4.304L3.696 7l6-6" />
        </svg>
      </picture>
    </div>

  );
}

export default CheckButton;