const LabelToDoText = ({ text, statusText }) => {
  return (
    <div className={`list__ToDo_content`}>
      <p className={`${statusText}`}>{text}</p>
    </div>
  )
}

export default LabelToDoText