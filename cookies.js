$("#btn").on("click", function(){
	var user = $("#user").val()
	Cookies.set ("usercookie", user)
	var userpass = $("#pass").val()
	Cookies.set ("userpass", userpass)
	var usermail = $("#mail").val()
	Cookies.set ("usermail", usermail)
	
	if(Cookies.get("usercookie") == "lucy"){
	$("body").css("background-color", "pink")
	$("#message").css("font-size", "100px")
	$("#message").html("Welcome, " + Cookies.get("usercookie") + "! " + "Your password, " + Cookies.get("userpass") + "  is not great..")

}

	if(Cookies.get("usercookie") == "mike"){
	$("body").css("background-color", "skyblue")
	$("#message").html("Welcome, " + Cookies.get("usercookie") + "!" + " Your email is " + Cookies.get("usermail"))

}



})

$("#message").html("Welcome, " + Cookies.get("usercookie") + "Your password, " + Cookies.get("userpass") + " is not great..")

if(Cookies.get("usercookie") == "lucy"){
	$("body").css("background-color", "pink")
}

if(Cookies.get("usercookie") == "mike"){
	$("body").css("background-color", "skyblue")
}

var d = new Date()
var dd = String(d).slice(0,16)
$("#date").html(dd)