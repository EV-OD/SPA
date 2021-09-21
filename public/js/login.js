function showError(inputType){
  let errorElt = document.querySelector(`.${inputType} .error`)
  let sucessElt = document.querySelector(`.${inputType} .sucess`)
  errorElt.classList.add("activeDetail")
  sucessElt.classList.remove("activeDetail")
}

function showSucess(inputType){
  let errorElt = document.querySelector(`.${inputType} .error`)
  let sucessElt = document.querySelector(`.${inputType} .sucess`)

  errorElt.classList.remove("activeDetail")
  sucessElt.classList.add("activeDetail")
}
