// todo 입력공간 가져오기
const todoInput = document.querySelector("#todo-form #todo");
// submit에서 엔터키 눌렀을때 새로고침되는 것을 막고, 리스트 추가하도록 만들기
document.querySelector("#todo-form").addEventListener("submit",
function(e){
    e.preventDefault();
    addTodo();
});

// todo button을 click이벤트로 실행
const todoButton = document.querySelector('#button');

// todo board 객체 가져오기
const todoBoard = document.querySelector('#todo-board');

// button에 이벤트리스너(click) 붙이기
todoButton.addEventListener("click",addTodo);

// 앞에서 실행한다고 써둔 addTodo 함수 만들기
function addTodo() {
    // todo입력창에 작성한 value값을 들고옴
    const text = todoInput.value;
    
    // 새로 list에 요소들을 생성
    // li, input type="checkbox", textNode, button 을 추가
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "boxes";
    const textNode = document.createTextNode(text);
    const button = document.createElement("button");
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);
    // 만든 li요소를 todoBoard에 추가
    todoBoard.append(li);

    // 다시 todoInput.value 값을 빈값으로 만들기
    todoInput.value ="";
    // button에 X문자열을 추가
    button.innerHTML="x";

    // 체크박스 눌렀을 때, 이벤트리스너 실행되도록: click event사용
    checkbox.addEventListener("click", todoCheck);
    // X 버튼을 눌렀을 때 이벤트리스너를 실행 : click event
    button.addEventListener("click",todoDelete);
}

// addTodo함수 내부에 또 만들어도 되지만, 밖으로 빼서 todoCheck함수 만듦
function todoCheck(e) {
    const li = e.target.parentNode;
    if(e.target.checked){
        li.style.color = "gray";
        li.style.textDecorationLine ="line-through";
    } else {
        li.style.color = "black";
        li.style.textDecorationLine ="none";
    }
}
// X버튼 이벤트리스너에 들어갈 함수 만들기
function todoDelete(e) {
    // li요소를 삭제한다
    const removes = e.target.parentNode;
    removes.remove();
}

// 완료된 일의 개수 화면에 출력하기 -span태그 내부에
counter.addEventListener("click", checkedCount);
function checkedCount(e){
    // 선택된 목록
    const selected = 'input[name="boxes"]:checked';
    const selectedElements = document.querySelectorAll(selected);
    // 선택된 목록의 갯수 세기
    const selectedCounts = selectedElements.length;
    // 출력
    var counter = document.querySelector('#counter');
    counter.innerHTML=selectedCounts;
    }
    // 0.1초마다 함수 호출, 이벤트 트리거(클릭 이벤트 자동동작)
    setInterval(function (){
        counter.click();
    }, 100);