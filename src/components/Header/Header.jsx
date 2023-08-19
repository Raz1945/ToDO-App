import './styles.css'
import Title from './components/Header.Title';
import ThemeButton from './components/Header.themeButton';

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