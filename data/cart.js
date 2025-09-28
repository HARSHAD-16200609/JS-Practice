 export const cart =[];

 export function add_cart() {
     const buttons = document.querySelectorAll(".js-add-to-cart")
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let prodId = button.dataset.productId;
          let container = button.closest(".product-container");
            let quantity = Number(container.querySelector("select").value);

            add_to_cart(prodId,quantity);
        })
    })
}

 function add_to_cart(prodId,quantity) {
    let ispresent = false;
    cart.forEach((item) => {

        if (prodId === item.productId) {
            ispresent = true;
            item.quantity += quantity
        }

    });
    if (!ispresent) {
        cart.push({
            productId: prodId,
            quantity: quantity
        });

    }
    cart_quantity();
}
 
function cart_quantity(){
    let totalquantity=0;
    cart.forEach((item)=>{
     totalquantity+=Number(item.quantity);
    });

    let cart_quantity=document.querySelector(".cart-quantity");
    cart_quantity.innerHTML=totalquantity;

}