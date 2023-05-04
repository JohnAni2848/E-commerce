class cartItem{
    constructor(name, img, price)
{
    this.name = name
    this.img = img
    this.price = price
    this.quantity = 1
}
}

class LocalCart{
    static key = 'cartItems'

    static getLogalCartItems(){
        let cartMap = new Map()
        const cart = logalstorage.getItem(key)
        if(cart===null || cartItem.length===0)return cartMap
        return new Map(Object.entries(JSON.parse(cart)))
    }
    addItemToLocalCart(Id, item){
        let cart = LocalCart.getLogalCartItems()
        if((acrt.has(id))){
            let mapItem = cart.get(id)
         mapItem.quantity +=1
         cart.set(id, mapItem)
        }
        else{
            cart.set(id, item)
            logalstorage.setItem(key, JSON.stringify(object.fromEntries(cart)))
        updateCartUI()
        }
    }
    static removeIetFromCart(id){
        let cart = LocalCart.getLocalCartItem()
        if(cart.has(id)){
            let mapItem = cart.grt(id)
            if(mapItem.quentity>1)
            {
                mapItem.quantity -=1
                cart.set(id, mapItem)
            }
            else
            cart.delete(id)
        }
if(cart.length===0)
localStorage.clear()
else
localStorage.setItem(key, JSON.stringify(object.fromEntries(cart)))
updateCartUI()
    }
}


const cartIcon = document.querySelector('.bi-cart-check-fill')
const wholeCartWindow = document.querySelector('.whole-cart-window')
wholeCartWindow.inWindow=0
const addToCartBtns = document.querySelectorAll('.add-to-cart-Btn')
addToCartBtns.forEach((btn)=>{
    btn.addEventListener('click', addItemFunction)
})

function addItemFunction(e){
    const id =e.target.parentElement.parentElement.getAttributes('data-id')
    console.log(id)
    
}



cartIcon.addEventListener('mouseover', () => {
    if (wholeCartWindow.classList.contains('hide'))
        wholeCartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleave', () => {
    // if(wholeCartWindow.classList.contains('hide'))
    setTimeout(() => {
        if (wholeCartWindow.inWindow === 0) {
            wholeCartWindow.classList.add('hide')
        }
    }, 500)
})

wholeCartWindow.addEventListener('mouseover', () => {
    wholeCartWindow.inWindow = 1
})

wholeCartWindow.addEventListener('mouseleave', () => {
    wholeCartWindow.inWindow = 0
    wholeCartWindow.classList.add('hide')
})

