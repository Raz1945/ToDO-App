import './styles.css'

const AppWrap = ({ theme, children }) => {
  return (
    <div id={theme} className='appWrap'>
      {children}
    </div>
  );
}
export default AppWrap;