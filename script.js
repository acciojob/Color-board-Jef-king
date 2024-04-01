let box = document.querySelector(".container");

for (let x = 0; x < 800; x++) {
  let nSq = document.createElement('div');
  nSq.classList.add('square');
  box.appendChild(nSq);
	nSq.addEventListener("mouseover",(e)=>{
		nSq.style.backgroundColor='red'
		e.stopPropagation()
		setTimeout(()=>{
			nSq.style.backgroundColor="rgb(29,29,29)";
		},1000)
	})
}
