import './styles.css'
import { icons } from '../../assets/icons';

const Header = ({ theme, setTheme }) => {
  return (
    <header className={`header__background ${theme}`}>
      <div className="header__container">
        <h1 className="header__title">todo</h1>
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
      </div>
    </header>
  );
}

export default Header;