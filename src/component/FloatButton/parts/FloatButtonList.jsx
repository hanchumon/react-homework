
import FloatButtonItem from "./FloatButtonItem";

function FloatButtonList({...restProp}) {
  const buttonArr = [
    "🎧 헤드셋",
    "⌨️ 키보드",
    "🖱️ 마우스",
    "💻 컴퓨터",
    "🎈 기타 등등",
  ];


  return (
    <>
      <ul
        className="floatButtonList"
        {...restProp}
        >
        {buttonArr.map((item) => {
          return <FloatButtonItem key={item} context={item} />;
        })}
      </ul>
    </>
  );
}

export default FloatButtonList;
