// 투두입력폼을 가져와서 submit(이벤트)을 눌렀을때, 함수실행
const todoForm = document.querySelector("#todo-form");
// 투두입력 DOM 가져오기
const todoInput = document.querySelector("#todo-form #todo-input");
// 완료한 할일 DOM 가져오기
const countText = document.querySelector("#counter");
// 완료한 할일 변수
let count = 0;

// todoForm에 submit 이벤트 발생시, 함수 추가
todoForm.addEventListener("submit", todoAdd);

// 실행될 함수 작성 : 투두리스트 추가
function todoAdd(e) {
    e.preventDefault();
    // 요소 생성
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text = document.createTextNode(todoInput.value);
    const button = document.createElement("button");
    button.innerHTML ="X";

    // 요소를 li안에 추가
    li.append(checkbox);
    li.append(text);
    li.append(button);

    // todo-board에 li요소를 추가
    document.querySelector("#todo-board").append(li);
    
    // todoInput의 값을 비우기
    todoInput.value = "";

    // checkbox에 클릭이벤트- text색상 회색
    checkbox.addEventListener("click", todoCheck);
    // button에 클릭이벤트- li삭제
    button.addEventListener("click", todoDelete);
}

function todoCheck(e) {
    // 체크표시가 되면 text의 색상을 회색으로 바꿈
    // 체크박스에서 체크여부 알수있음
    // console.dir(e.target);
    if( e.target.checked ) {
        e.target.parentNode.style.color = "lightgray";
        e.target.parentNode.style.textDecorationLine ="line-through";
        // count 값을 1증가
        count++;
        countText.innerHTML = count;
    } else {
        e.target.parentNode.style.color = "black";
        // count 값을 1감소
        count--;
        countText.innerHTML = count;
    }
}

function todoDelete(e) {
    //console.dir(e.target.parentNode)
    if(e.target.parentNode.firstChild.checked) {
        count--;
        countText.innerHTML = count;
    }
    e.target.parentNode.remove();
}