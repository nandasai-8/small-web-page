let header = {
    title: "Wrap & Roll",
    cart: "🛒"
}
document.write(`
    <header>
        <h1>${header.title}</h1>
        <div class="cart" onclick="opennav()">${header.cart}</div>
        </header>
    `);
let items = [
    {
        img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name: "Dosa",
        price: 50,
        cart: "🛒"
    },
    {
        img: "https://chakriskitchen.com/wp-content/uploads/2018/12/Idly19-500x500.jpg",
        name: "idly",
        price: 60,
        cart: "🛒"
    },
    {
        img: "https://lh4.googleusercontent.com/proxy/EG-kWc7b5gqVrXOriIpVK4ao-jNHc5WfpDzv2g0PV_yIhzAl4tAXAy_9q69f00QG-3odYcWYf2jb7keCIUv5DCp2xp16tSMiXnpn",
        name: "chicken roll",
        price: 90,
        cart: "🛒"
    },
    {
        img: "https://www.ndtv.com/cooks/images/natu.kodi.kura.jpg?im=FaceCrop,algorithm=dnn,width=140,height=105",
        name: "chiken-curry",
        price: 120,
        cart: "🛒"
    },
    {
        img: "https://i.ytimg.com/vi/2GAZ723iV_o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJts-iC8PTdcGj9n76i1lfT-7qDA",
        name: "Boti-curry",
        price: 250,
        cart: "🛒"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hCCT4NGYhkIiJ74uovvTyX07tY1eL5w9xQ&s",
        name: "sandwich",
        price: 150,
        cart: "🛒"
    },
    {
        img: "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder.jpg",
        name: "Brownie",
        price: 90,
        cart: "🛒"
    },
    {
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/tandoori-roti-recipe.jpg",
        name: "Tandoori Roti",
        price: 150,
        cart: "🛒"
    },

];
let parent = '<div class="items">'
for (let i = 0; i < items.length; i++) {
    parent += `
        <div class="item">
            <img src="${items[i].img}" ">
            <h2>${items[i].name}</h2>
            <p>Price: ₹${items[i].price}</p>
            <button class="add-to-cart" >${items[i].cart}</button>
        </div>
    `;

}
document.write(parent);
let toggle = {
    para: 'cart is empty',
    title: "❌",
    cart: "Order Now"

}
document.write(`
    <div class="toggle" >
    <h2>${toggle.para}</h2>
        <a href="javascript:void(0)" onclick="closenav()" >${toggle.title}</a>
        <div class="cartbtn">${toggle.cart}</div>
        
        </div>
    `);
function opennav() {
    document.querySelector(".toggle").style.width = "30%";
    
}
function closenav() {
    document.querySelector(".toggle").style.width = "0";

}
