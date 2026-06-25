let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisu = 0;
let gameOver = false;
function hantei() {
  kaisu += 1;
  document.getElementById('kaisu').textContent = kaisu;
  let yoso = Number(document.getElementById('yoso').value);
  let result = document.getElementById('result');
  if (gameOver || kaisu >= 4) {
    result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    return;
  }
  if (yoso === kotae) {
    result.textContent = '正解です．おめでとう!';
    gameOver = true;
    return;
  }
  if (kaisu === 3) {
    result.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
    return;
  }
  if (yoso < kotae) {
    result.textContent = 'まちがい．答えはもっと大きいですよ';
  } else {
    result.textContent = 'まちがい．答えはもっと小さいですよ';
  }
}
const button = document.getElementById('hanteiButton');
button.addEventListener('click', hantei);
