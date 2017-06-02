"use strict";
var list = document.querySelector(".list");
var btnmenu=document.querySelector("#btnmenu");

btnmenu.addEventListener("click", showMenu);

function showMenu(){
  list.classList.toggle("list-show");
}
