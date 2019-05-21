$("ul").on("click", "li", function () {
	//make selected todo marked
	$(this).toggleClass("mark");
})

$("ul").on("click", "span",function (element) {
	//made whole list fade out
	$(this).parent().fadeOut("500", function(){
		$(this).remove();
	});
	

//ensure like only affects specified area
	element.stopPropagation()
})

$("input[type = 'text']").on("keypress", function(arg){
	if (arg.which === 13) {
		//set value of input to a variable
		let newTodo = $(this).val()
		//make new addition to list
		$("ul").append(" <li> <span><i class='fas fa-trash'></i></span>" + newTodo + "</li>")
		$(this).val("")
		
	}



})

$(".fa-plus").on("click", function () {
	// body...
	$("input[type = 'text']").fadeToggle()
})
