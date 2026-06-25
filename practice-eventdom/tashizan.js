const b = document.querySelector('button#calc');
b.addEventListener('click', calc);

function calc() {
  left = document.querySelector('#left');
  right = document.querySelector('#right');
  leftNum = Number(left.value);
  rightNum = Number(right.value);
  answer = leftNum + rightNum;
  span = document.querySelector('#answer');
  span.textContent = answer;
}