let box = document.querySelector(".container");

for (let x = 0; x < 800; x++) {
  let nSq = document.createElement('div');
  nSq.className = 'square';
  box.appendChild(nSq);
}
