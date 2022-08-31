const mainEl = document.querySelectorAll(".main")
const contentEl = document.querySelectorAll(".content")


for (let i=0; i<mainEl.length; i++ ){

mainEl[i].addEventListener("click", function () {
clearActive()
mainEl[i].nextElementSibling.classList.toggle('active')

})
}

function clearActive(){
   for (let i=0; i<contentEl.length; i++ ){
      contentEl[i].classList.remove('active')
}
}
