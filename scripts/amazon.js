        const products=[
            
            
            {image:"images/products/athletic-cotton-socks-6-pairs.jpg",
            Name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating:{
                stars:"45",
                no_of_reviews:87
            },
            price_cents:1090
        },



        {image:"images/products/intermediate-composite-basketball.jpg",
            Name:" Intermediate Size Basketball",
            rating:{
                stars:"40",
                no_of_reviews:127
            },
            price_cents:2095}
            
            
            
            ,{image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            Name:" Adults Plain Cotton T-Shirt - 2 Pack",
            rating:{
                stars:"45",
                no_of_reviews:56 
            },
            price_cents:799 }
        ]

        let innerHtml="";

        function add_product(){
        products.forEach((value)=>{
        innerHtml +=
            `<div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${value.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${value.Name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${value.rating.stars}.png">
                    <div class="product-rating-count link-primary">
                    ${value.rating.no_of_reviews}
                    </div>
                </div>

                <div class="product-price">
                    $${((value.price_cents)/100).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary">
                    Add to Cart
                </button>
                </div>`
            
        document.querySelector(".products-grid").innerHTML=innerHtml;
    }
  )
}

add_product();

