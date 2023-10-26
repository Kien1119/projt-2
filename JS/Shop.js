const openShopping = document.querySelector(".openShopping");
const closeShopping = document.querySelector(".closeShopping");
const  list = document.querySelector(".list");
const listCard = document.querySelector("listCard");
const total = document.querySelector(".total")
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity")
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick  = ()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick  = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick  = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll  = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

