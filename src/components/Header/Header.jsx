import './styles.css'
import Title from './Header.Title';
import ThemeButton from './Header.themeButton';

const Header = ({ theme, setTheme }) => {
  return (
    <header className={`header__background ${theme}`}>
      <div className="header__container">
        <Title text='todo' />
        <ThemeButton theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}

export default Header;