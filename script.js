let box = document.querySelector(".container");

for (let x = 0; x < 800; x++) {
  let nSq = document.createElement('div');
  nSq.classList.add('square');
  box.appendChild(nSq);
	nSq.addEventListener("mouseover",(e)=>{
		e.stopPropagation()
		setTimeout(()=>{
			nSq.style.backgoundColor="red";
		},4000)
	})
}
