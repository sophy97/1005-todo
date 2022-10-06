const todoForm = $("#todo-form");
const todoInput = $("#todo-form #todo-input");

const countText = $("#counter");
let count = 0;

todoForm.on("submit", todoAdd);

function todoAdd(e){
    e.preventDefault();

    const li = $("<li>");
    const checkbox = $("<input>");
    checkbox.attr("type","checkbox");
    const button = $("<button>");
    button.html("X");

    // li다음에 만들 내용 한번에 쓸 수 있음
    li.append(checkbox).append(todoInput.val()).append(button);
    // 앞에 만든 내용을 todoboard에 붙이기
    $("#todo-board").append(li);
    // 인풋박스 안 내용 빈값 초기화 
    todoInput.val("");
    // 체크와 삭제버튼 내용 생성
    checkbox.on("click", todoCheck);
    button.on("click", todoDelete);
}

function todoCheck() {
    // attr : html태그에 직접 붙는 속성
    // prop : html객체가 가지고있는 속성
    if ( $(this).prop("checked") ) {
        $(this).parent().attr("style","color:lightgray;");
    } else {
        $(this).parent().attr("style","color:black;");
    }

    count = $("#todo-board li input:checked").length;
    countText.html(count);
}
function todoDelete() {
    $(this).parent().remove();
    count = $("#todo-board li input:checked").length;
    countText.html(count);
}