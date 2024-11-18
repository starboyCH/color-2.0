const box= document.querySelector(".box");
const red= document.querySelector(".red");
red.addEventListener("click", (e)=>{
	box.style.backgroundColor= "red";
	e.preventDefault();
});
const blue= document.querySelector(".blue");
blue.addEventListener("click", (e)=>{
	box.style.backgroundColor= "blue";
	e.preventDefault();
});
const yellow= document.querySelector(".yellow");
yellow.addEventListener("click", (e)=>{
	box.style.backgroundColor= "yellow";
	e.preventDefault();
});
const green= document.querySelector(".green");
green.addEventListener("click", (e)=>{
	box.style.backgroundColor= "green";
	e.preventDefault();
});
