let header={
    title: "My Website",
    cart:"🛒"
}
document.write(`
    <header>
        <h1>${header.title}</h1>
        <div class="cart">${header.cart}</div>
        </header>
    `);
let items = [
    {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
        {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
        {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
        {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
            {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
            {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
            {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
            {
        img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
        name:"Dosa",
        price: 50,
        cart: "🛒"
    },
    
];
let parent='<div class="items">'
for(let i=0; i<items.length; i++){
    parent += `
        <div class="item">
            <img src="${items[i].img}" ">
            <h2>${items[i].name}</h2>
            <p>Price: ₹${items[i].price}</p>
            <button class="add-to-cart">${items[i].cart}</button>
        </div>
    `;

}
document.write(parent);