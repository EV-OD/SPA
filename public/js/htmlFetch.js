let loader = document.querySelector(".loader")

async function fetchHtml(filename){
	let htmlDoc;

	restartLoader()
	let res = await fetch(filename)
	let resHtml = await res.text()
	loader.style.animationPlayState = "running"
	return resHtml
}

function restartLoader(){
	loader.style.visibility = "visible"
	loader.classList.add("activeLoader")
	loader.style.animationPlayState = "running"
	loader.onanimationend = (e)=>{
		loader.classList.remove("activeLoader")
	}
}


function stopLoader(){
	loader.style.visibility = "hidden"
	loader.style.animationPlayState = "paused"
}
