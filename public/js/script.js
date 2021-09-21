
let toggle = document.querySelector(".toggle")
let menuBar = document.querySelector(".menuBar")
var style = document.body
var sideBar_nav = document.querySelectorAll(".sideBar_nav")

// history.pushState("","","home")

// fetchHtml("home.html").then(res=>{
// 					document.querySelector(".home").innerHTML = res
// 				})

let activeTab = document.location.pathname.slice(1,document.location.pathname.length)

if(document.location.pathname == "/") {
  window.location.href = "/home";

}

window.onload = (e) =>{
	showContent(activeTab)
	sideBar_nav.forEach(elt1=>{
		elt1.classList.remove("active")
	})


	document.querySelector("."+ activeTab).classList.add("active")
	document.querySelector("."+ activeTab).classList.remove("noActive")
	document.querySelector("."+ activeTab+"Tab").classList.add("active")
	window.onpopstate = (e)=>{
		let path = document.location.pathname.slice(1,document.location.pathname.length)
		console.log(path)
		fetchHtml(path + ".html").then(res=>{
					document.querySelector("." + path).innerHTML = res
					sideBar_nav.forEach(elt1=>{
						elt1.classList.remove("active")
					})
					document.querySelector("." + path + "Tab").classList.add("active")
					showContent(path)
		})
	}
	// toggleBtn
	let tabStatus = true
	toggle.onclick = (e) =>{
		if(tabStatus){
		    style.style.setProperty("--sideBarWidth","70px")
		    tabStatus = false

		}else{
			style.style.setProperty("--sideBarWidth","200px")
			tabStatus = true
		}

		}

	//sideBar navigation
	sideBar_nav.forEach(elt=>{
		elt.onclick = (e)=>{
			e.preventDefault()
			if(!elt.classList.contains("active")){
				sideBar_nav.forEach(elt1=>{
					elt1.classList.remove("active")
				})
				elt.classList.add("active")
				let dataClass = elt.getAttribute("data-class");
				fetchHtml(dataClass + ".html").then(res=>{
					document.querySelector("." + dataClass).innerHTML = res
				})
				history.pushState("","",dataClass)
				showContent(dataClass)
		}
		}
	})
	}

function showContent(dataClass){
	dataClasses = ["home","download","login","signup"]
	dataClasses.forEach(eltClass=>{
		let tabElt = document.querySelector(`.${eltClass}`)
		tabElt.classList.add("noActive")
	})
	let tabElt = document.querySelector(`.${dataClass}`)
	tabElt.classList.remove("noActive")
}


