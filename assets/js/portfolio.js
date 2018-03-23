
var partCounter = 2;
var seconds = 0

$("#landingDiv").show()
$("#navScreenDiv").hide()
$("#resumeDiv").hide()
$("#websitesDiv").hide()
$("#gamesDiv").hide()
$("#designDiv").hide()
$("#artDiv").hide()
$("#aboutDiv").hide()
$("#cultureFitDiv").hide()


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
$("#cultureFitDiv").hide()
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
    $("#cultureFitDiv").hide()
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
    $("#cultureFitDiv").hide()
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
    $("#cultureFitDiv").hide()
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
    $("#cultureFitDiv").hide()
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
    $("#cultureFitDiv").hide()
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
    $("#cultureFitDiv").hide()
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

//culture page

$("#cultureCol").on("click", function() {
  $("#aboutDiv").hide()
  $("#cultureFitDiv").show()
  $("#arrows").show()
  $("#catsAndDogs").hide()
  $("#hiddenPets").hide()
  setTimeout(function(){$("#catsAndDogs").show()},1800);
  $("#books").hide()
  $("#music").hide()
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#arrows").fadeOut(250);
  $("#arrows").fadeIn(250);
  $("#arrows").fadeOut(250);
  $("#arrows").fadeIn(250);
  $("#arrows").fadeOut(250);
  $("#arrows").fadeIn(250);
  $("#arrows").fadeOut(250);
})

$("#petPad").on("click", function() {
  console.log("petpadclicked")
  $("#cultureBlock").css("opacity", ".8")
  $("#hiddenPets").show()
  var i=0
  do {
    $("#rainer").hide();
    $("#lucy").show();
    $("#lucy").fadeOut(5000);
    setTimeout(function() {$("#lucy").hide();
    $("#rainer").show();
    $("#rainer").fadeOut(5000);
  },4000);
    i++
  } while (i<2)

/*   $("#cultureBlock").css("opacity", "1")
 */})