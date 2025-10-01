
 export let cart =[{product_id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
quantity:2},
{product_id:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:4
}
 ];

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
let newcart=[];
export function removefromcart(product_id){
         
       cart.forEach((item)=>{

        if(item.product_id !== product_id){
            newcart.push(item)
        }

       })
   console.log(newcart);     
}


