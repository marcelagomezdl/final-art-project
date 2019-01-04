$("#btn").on("click", function(){
	var user = $("#user").val()
	Cookies.set ("usercookie", user)
})

$("#message").html("Welcome, " + Cookies.get("usercookie"))

if(Cookies.get("usercookie") == "lucy"){
	$("body").css("background-color", "pink")
}