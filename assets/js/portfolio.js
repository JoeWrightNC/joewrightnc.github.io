
$("#landingDiv").show()
$("#navScreenDiv").hide()
$("#resumeDiv").hide()
$("#websitesDiv").hide()
$("#gamesDiv").hide()
$("designDiv").hide()
$("artDiv").hide()
$("#aboutDiv").hide()

function surpriseDivTime() {
  var i=0
  $("#surpriseDiv").show()
  do {
    $("#surpriseDiv").fadeOut(250);
    $("#surpriseDiv").fadeIn(250);
    i++
  }
  while (i<13)
  $("#surpriseDiv").fadeOut(250);
}

surpriseDivTime()

$("#hamburgerBtn").on("mouseenter", (function(){
  $("#hamburgerBtn").html("Click to Explore")
  $("#hamburgerBtn").animate({
    right: "10%",
    top: "10%",
    height: "40px",
  }, 1000)
}))

$("#hamburgerBtn").on("click", function(){
  console.log("click received")
  $("#hamburgerBtn").unbind("mouseenter")
  $("#hamburgerBtn").html("Destinations")
  $("#hamburgerBtn").animate({
    width: "100%",
    right: "48%",
  }, 1800)
  navScreen()
})

function navScreen() {
  $("#landingDiv").hide()
  $("#navScreenDiv").show()
  $("#resumeBtn").on("click", function(){
    
  })
}
