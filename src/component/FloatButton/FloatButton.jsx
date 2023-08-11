import { useState } from "react";
import PlusButton from "./parts/PlusButton";
import FloatButtonList from "./parts/FloatButtonList";
import "./FloatButton.css";

function FloatButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const plusButtonStyle = isClicked
    ? { background: "white", color: "#171F31" }
    : { background: "#171F31", color: "white" };

  let buttonListStyle = isClicked
    ? {}
    : {display:"none"};

  console.log(buttonListStyle);

  return (
    <div className="container">
      <FloatButtonList onClick={handleClick} style={buttonListStyle} />
      <PlusButton onClick={handleClick} style={plusButtonStyle} />
    </div>
  );
}

export default FloatButton;
