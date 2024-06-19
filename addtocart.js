// const product = [
//     {
//         id: 0,
//         image: 'dist/img/bomb1.jpg',
//         title: 'BOMB 1 💀',
//         price: 120,
//     },
//     {
//         id: 1,
//         image: 'dist/img/bomb2.jfif',
//         title: 'BOMB 2 ',
//         price: 60,
//     },
//     {
//         id: 2,
//         image: 'dist/img/bomb3.jfif',
//         title: 'BOMB 3',
//         price: 230,
//     },
//     {
//         id: 3,
//         image: 'dist/img/bomb4.jfif',
//         title: 'BOMB 4',
//         price: 100,
//     }
// ];
// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i=0;
// document.getElementById('root').innerHTML = categories.map((item)=>
// {
//     var {image, title, price} = item;
//     return(
//         `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${title}</p>
//         <h2>$ ${price}.00</h2>`+
//         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//         `</div>
//         </div>`
//     )
// }).join('')

// var cart =[];

// function addtocart(a){
//     cart.push({...categories[a]});
//     displaycart();
// }
// function delElement(a){
//     cart.splice(a, 1);
//     displaycart();
// }

// function displaycart(){
//     let j = 0, total=0;
//     document.getElementById("count").innerHTML=cart.length;
//     if(cart.length==0){
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//         document.getElementById("total").innerHTML = "$ "+0+".00";
//     }
//     else{
//         document.getElementById("cartItem").innerHTML = cart.map((items)=>
//         {
//             var {image, title, price} = items;
//             total=total+price;
//             document.getElementById("total").innerHTML = "$ "+total+".00";
//             return(
//                 `<div class='cart-item'>
//                 <div class='row-img'>
//                     <img class='rowimg' src=${image}>
//                 </div>
//                 <p style='font-size:12px;'>${title}</p>
//                 <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
//                 "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
//             );
//         }).join('');
//     }

    
// }
const product = [
    {
        id: 0,
        image: "dist/img/bomb1.jpg",
        title: "BOMB 1 💀",
        price: 120,
    },
    {
        id: 1,
        image: "dist/img/bomb2.jfif",
        title: "BOMB 2 ",
        price: 60,
    },
    {
        id: 2,
        image: "dist/img/bomb3.jfif",
        title: "BOMB 3",
        price: 230,
    },
    {
        id: 3,
        image: "dist/img/bomb4.jfif",
        title: "BOMB 4",
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => item))];

let i = 0;
document.getElementById("root").innerHTML = `
    <button onclick='addAllToCart()'>Add All to Cart</button>
    <br>
    ${categories.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addtocart(${i++})'>Add to cart</button>
                </div>
            </div>`
        );
    }).join("")}
    <br>    
    <button onclick='buyItems()'>Buy</button>
    
`;

var cart = [];

function addtocart(a) {
    cart.push({...categories[a] });
    displaycart();
}

function addAllToCart() {
    cart = [...categories];
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0,
        total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <button onclick='delElement(${j++})'>Remove</button>
                </div>`
            );
        }).join("");
    }
}

function buyItems() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        displaycart();
    } else {
        alert('Your cart is empty.');
    }
}
