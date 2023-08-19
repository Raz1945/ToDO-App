import { icons } from "../../../assets/icons";

const ThemeButton = ({ theme, setTheme }) => {
  return (
    <div className='header-btn-container'>
      <button
        className='header__btn'
        onClick={setTheme}
      >
        <img
          src={(theme === 'dark') ? icons.dark : icons.light}
          alt={`${theme}`}
          className='header__img'
        />
      </button>
    </div>
  );
}

export default ThemeButton;