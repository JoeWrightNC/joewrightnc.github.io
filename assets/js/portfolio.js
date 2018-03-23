
var partCounter = 2;

$("#landingDiv").show()
$("#navScreenDiv").hide()
$("#resumeDiv").hide()
$("#websitesDiv").hide()
$("#gamesDiv").hide()
$("#designDiv").hide()
$("#artDiv").hide()
$("#aboutDiv").hide()

function surpriseDivTime() {
  var i=0
  $("#surpriseDiv").show()
  do {
    $("#surpriseDiv").fadeOut(300);
    $("#surpriseDiv").fadeIn(300);
    i++
  }
  while (i<8)
  $("#surpriseDiv").fadeOut(250);
}

surpriseDivTime()

$("#hamburgerBtn").on("mouseenter", (function(){
  $("#hamburgerBtn").html("Click to Explore")
  $("#hamburgerBtn").animate({
    right: "10%",
    top: "9.5%",
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
  $("#resumeDiv").hide()
$("#websitesDiv").hide()
$("#gamesDiv").hide()
$("#designDiv").hide()
$("#artDiv").hide()
$("#aboutDiv").hide()
  navScreen()
})

function navScreen() {
  $("#landingDiv").hide()
  $("#navScreenDiv").show()
  $("#resumeBtn").on("click", function(){
    $("#hamburgerBtn").html("Explore More?")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").show()
    $("#websitesDiv").hide()
    $("#gamesDiv").hide()
    $("#designDiv").hide()
    $("#artDiv").hide()
    $("#aboutDiv").hide()
    $("#hamburgerBtn").animate({
      width: "8%",
      right: "9.5%",
      position: "absolute",
      fontSize:"small",
    }, 1800)
  })
  $("#websitesBtn").on("click", function(){
    $("#hamburgerBtn").html("Explore More?")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").hide()
    $("#websitesDiv").show()
    $("#gamesDiv").hide()
    $("#designDiv").hide()
    $("#artDiv").hide()
    $("#aboutDiv").hide()
    $("#hamburgerBtn").animate({
      width: "8%",
      right: "9.5%",
      position: "absolute",
      fontSize:"small",
    }, 1800)
  })
  $("#gamesBtn").on("click", function(){
    $("#hamburgerBtn").html("Explore More?")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").hide()
    $("#websitesDiv").hide()
    $("#gamesDiv").show()
    $("#designDiv").hide()
    $("#artDiv").hide()
    $("#aboutDiv").hide()
    $("#hamburgerBtn").animate({
      width: "8%",
      right: "9.5%",
      position: "absolute",
      fontSize:"small",
    }, 1800)
    })
  $("#designBtn").on("click", function(){
    $("#hamburgerBtn").html("Explore More?")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").hide()
    $("#websitesDiv").hide()
    $("#gamesDiv").hide()
    $("#designDiv").show()
    $("#artDiv").hide()
    $("#aboutDiv").hide()
    $("#hamburgerBtn").animate({
      width: "8%",
      right: "9.5%",
      position: "absolute",
      fontSize:"small",
    }, 1800)
  })
  $("#artBtn").on("click", function(){
    $("#hamburgerBtn").html("Explore More?")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").hide()
    $("#websitesDiv").hide()
    $("#gamesDiv").hide()
    $("#designDiv").hide()
    $("#artDiv").show()
    $("#aboutDiv").hide()
    $("#hamburgerBtn").animate({
      width: "8%",
      right: "9.5%",
      position: "absolute",
      fontSize:"small",
    }, 1800)
  })
  $("#aboutBtn").on("click", function(){
    $("#hamburgerBtn").html("Explore More?")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").hide()
    $("#websitesDiv").hide()
    $("#gamesDiv").hide()
    $("#designDiv").hide()
    $("#artDiv").hide()
    $("#aboutDiv").show()
    $("#hamburgerBtn").animate({
      width: "8%",
      right: "9.5%",
      position: "absolute",
      fontSize:"small",
    }, 1800)
  })
}

$("#aboutCol").on("click", function() {
  partCounter++
  $("#partCounter").html(partCounter)
  surpriseDivTime();
})
