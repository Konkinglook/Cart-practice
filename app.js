let iconCart = document.querySelector(".icon-cart")
let closeBtn = document.querySelector(".close")
let body = document.body


iconCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})
closeBtn.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})