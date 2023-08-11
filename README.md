# 1주차 과제 - Atomic Component 구현 

## 파일 구성
<img width="357" alt="image" src="https://github.com/hanchumon/react-homework/assets/116139215/684b33ec-76ef-4926-a855-1d0b561a7f1b">


<br/>
---

## Mark Up 구조

<img width="780" alt="image" src="https://github.com/hanchumon/react-homework/assets/116139215/9646dbcc-9b8e-4cd5-8ec0-b880fef972b3">

<br/>
---

## 주요 코드 구성

```jsx
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
```



`container` 안쪽에 토글타입으로 올라오는 `FloatButtonList`와 아래쪽에 `PlusButton`로 내부에 두가지 버튼이 들어있는 구조로 되어있습니다.

```jsx
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
```
`map`메서드를 사용하여 내부를  순환하여 새로운 배열을 만들어서 반환하여 코드를 제작하였습니다.





## 완성사진

<img src = https://github.com/hanchumon/react-homework/assets/116139215/f2b9e39f-50c8-43f5-94d9-9dabacc5efac />


## 부족한 점
1. `hidden`속성이 적용되지 않는 문제가 있어서 `display:none`으로 처리하면서 `조건부표시`가 처리되었다. 리소스관련해서 `hidden`속성을 적용시켜볼 것.
2. 시간 부족으로 토글시 애니메이션을 넣고싶었으나 적용하지 못한 것



## Figma url

<a href="https://www.figma.com/file/FEnZUInEQBR0j2rWv0DYQh/FloatingActionButton?type=design&node-id=0-1&mode=design&t=osvna2fHn1gN7GAe-0">Figma시안</a>