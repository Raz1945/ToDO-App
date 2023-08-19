const LabelToDoWrap = ({children, theme, enter, leave}) => {
  return (
    <div
      className="list__ToDo_container"
      id={theme}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {children}
    </div>
  )
}

export default LabelToDoWrap