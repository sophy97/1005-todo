// id가 clock인 h3문서객체 가져오기
const clock = document.querySelector("#clock");

function getClock () {
// 현재 시간을 가져오는 객체
const date = new Date();

// 00:00:00 포맷을 맞추기 위해 String의 padStart 메소드를 사용
// 숫자형을 문자형으로 바꿀 땐, 앞으로 숫자로 연산할 일이 있는지 생각한 후에 바꾸자
const years = String(date.getFullYear());
const months = String(date.getMonth()+1).padStart(2, "0");
const dates = String(date.getDate()).padStart(2, "0");
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");

// return을 통해 현재 시간을 내보내줌
// 문자명과 변수를 함께 표기하기 위해 백틱 사용
return `${years}/${months}/${dates} <br>
        ${hours} : ${minutes} : ${seconds}`;
}
// 함수를 통해 시간 문자열을 할당
clock.innerHTML = getClock();
// 인터벌 함수를 사용, 1초마다(1000) 시간이 변경되도록 반복
setInterval( ()=>{clock.innerHTML = getClock();}, 1000 );