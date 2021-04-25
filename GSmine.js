let menu = document.getElementsByClassName("menu")
let menud = document.getElementsByClassName("menud")
let menus = 0
menu[0].addEventListener("click", function(){
	if (menus == 0) {
		menu[0].style.height = "266px"
		setTimeout(function(){
			menud[0].style.display = "block"
			menud[1].style.display = "block"
			menud[2].style.display = "block"
			menud[3].style.display = "block"
		}, 150)
		menus = 1
	}
	else{
		menu[0].style.height = "45px"
		menud[0].style.display = "none"
		menud[1].style.display = "none"
		menud[2].style.display = "none"
		menud[3].style.display = "none"
		menus = 0
	}
});

let point = document.getElementsByClassName("point")
let slide = document.getElementsByClassName("slide")
slide[0].style.left = 0
slide[1].style.left = "700px"
slide[2].style.left = "1400px"
point[0].style.backgroundColor = "lime"
point[0].addEventListener("click", function(){
	slide[0].style.left = 0
	slide[1].style.left = "700px"
	slide[2].style.left = "1400px"
	point[0].style.backgroundColor = "lime"
	point[1].style.backgroundColor = "#161616"
	point[2].style.backgroundColor = "#161616"
});
point[1].addEventListener("click", function(){
	slide[0].style.left = "-700px"
	slide[1].style.left = 0
	slide[2].style.left = "700px"
	point[0].style.backgroundColor = "#161616"
	point[1].style.backgroundColor = "lime"
	point[2].style.backgroundColor = "#161616"
});
point[2].addEventListener("click", function(){
	slide[0].style.left = "-1400px"
	slide[1].style.left = "-700px"
	slide[2].style.left = 0
	point[0].style.backgroundColor = "#161616"
	point[1].style.backgroundColor = "#161616"
	point[2].style.backgroundColor = "lime"
});