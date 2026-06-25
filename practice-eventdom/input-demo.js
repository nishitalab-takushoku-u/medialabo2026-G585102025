b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
  i = document.querySelector('input[name="shimei"]');
  shimei = i.value;
  aisatsu = 'こんにちは，' + shimei + 'さん';
  p = document.querySelector('#message');
  p.textContent = aisatsu;
}