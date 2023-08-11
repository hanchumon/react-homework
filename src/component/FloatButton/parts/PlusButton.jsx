
function PlusButton({...restProps}){

  return (
    <button
      type="button"
      className="plusButton"
      {...restProps}
      >
      +
    </button>
  )
}

export default PlusButton;