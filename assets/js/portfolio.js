$(document).ready(function () {

var partCounter = 2;
var seconds = 0
var favBands = [
  "Godspeed, You! Black Emperor",
  "Mogwai",
  "Explosions in the Sky",
  "The Wood Brothers",
  "John Stickley Trio",
  "Elephant Revival",
  "The Black Angels",
  "Jamie XX",
  "J. Cole",
  "Zack Mexico",
]

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
  $("#hamburgerBtn").unbind("effect")
  $("#hamburgerBtn").animate({
    right: "10%",
    top: "9.5%",
    height: "40px",
  }, 1000)
}))

$("#hamburgerBtn").on("click", function(){
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
  setTimeout(function(){$("#catsAndDogs").show()},1400);
  $("#books").hide()
  $("#music").hide()
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#arrows").fadeOut(200);
  $("#arrows").fadeIn(450);
  $("#arrows").fadeOut(350);
  $("#arrows").fadeIn(200);
  $("#arrows").fadeOut(150);

})

$("#petPad").on("click", function() {
  console.log("petpadclicked")
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
})

$("#petsArrow").on("click", function() {
  $("#arrows").show()
  $("#catsAndDogs").hide()
  $("#hiddenPets").hide()
  $("#music").hide()
  setTimeout(function(){$("#music").show()},2300);
  $("#recordPlayerDiv").hide();
  $("#books").hide()
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#arrows").fadeOut(200);
  $("#arrows").fadeIn(450);
  $("#arrows").fadeOut(350);
  $("#arrows").fadeIn(200);
  $("#arrows").fadeOut(150);
  $("#arrows").fadeIn(600);
  $("#arrows").fadeOut(250);
})

$("#guitar").on("click", function() {
  $("#musicFirst").hide();
  $("#recordPlayerDiv").show();
})

$("#recordBtnOne").on("click", function() {
  $("#recordPlayer").attr("src", "assets/images/recordPlayer.gif")
  var stopOne = document.getElementById("gameMusicSource2");;
  var stopTwo = document.getElementById("gameMusicSource3");;
  stopOne.pause();
  stopTwo.pause();
  var player = document.getElementById("gameMusicSource1");;
  player.loop = false;
  player.play();
  $("#recordPauseBtn").on("click", function() {
    player.pause();
    $("#recordPlayer").attr("src", "assets/images/recordPlayerStill.png")
  })
})

$("#recordBtnTwo").on("click", function() {
  $("#recordPlayer").attr("src", "assets/images/recordPlayer.gif")
  var stopOne = document.getElementById("gameMusicSource1");;
  var stopTwo = document.getElementById("gameMusicSource3");;
  stopOne.pause();
  stopTwo.pause();
  var player = document.getElementById("gameMusicSource2");;
  player.loop = false;
  player.play();
  $("#recordPauseBtn").on("click", function() {
    player.pause();
    $("#recordPlayer").attr("src", "assets/images/recordPlayerStill.png")
  })
})

$("#recordBtnThree").on("click", function() {
  $("#recordPlayer").attr("src", "assets/images/recordPlayer.gif")
  var stopOne = document.getElementById("gameMusicSource1");;
  var stopTwo = document.getElementById("gameMusicSource2");;
  stopOne.pause();
  stopTwo.pause();
  var player = document.getElementById("gameMusicSource3");;
  player.loop = false;
  player.play();
  $("#recordPauseBtn").on("click", function() {
    player.pause();
    $("#recordPlayer").attr("src", "assets/images/recordPlayerStill.png")
  })
})

$("#recordBtnFour").on("click", function() {
  $("#musicFirst").show();
  $("#recordPlayerDiv").hide();
})

$("#musicArrow").on("click", function() {
  $("#arrows").show()
  $("#catsAndDogs").hide()
  $("#hiddenPets").hide()
  $("#music").hide()
  $("#books").hide()
  $("#bookShelfDiv").hide()
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
  setTimeout(function(){$("#books").show()},2300);
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#arrows").fadeOut(200);
  $("#arrows").fadeIn(450);
  $("#arrows").fadeOut(350);
  $("#arrows").fadeIn(200);
  $("#arrows").fadeOut(150);
  $("#arrows").fadeIn(600);
  $("#arrows").fadeOut(250);
})

$("#openBook").on("click", function(){
  $("#booksBlock").hide()
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
  $("#bookShelfDiv").show()
})

$("#rilke").on("click", function() {
  $("#bookShelfDiv").hide();
  $("#rilkeDiv").show();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
})

$("#ferlinghetti").on("click", function() {
  $("#bookShelfDiv").hide();
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").show();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
})

$("#olson").on("click", function() {
  $("#bookShelfDiv").hide();
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").show();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
})

$("#ginsberg").on("click", function() {
  $("#bookShelfDiv").hide();
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").show();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
})

$("#yeats").on("click", function() {
  $("#bookShelfDiv").hide();
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").show();
  $("#mayakovskyDiv").hide();
})

$("#mayakovsky").on("click", function() {
  $("#bookShelfDiv").hide();
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").show();
})

$("#leavePoemBtn").on("click", function() {
  $("#rilkeDiv").hide();
  $("#ferlinghettiDiv").hide();
  $("#olsonDiv").hide();
  $("#ginsbergDiv").hide();
  $("#yeatsDiv").hide();
  $("#mayakovskyDiv").hide();
  $("#bookShelfDiv").show();
})

$("#leaveBooksBtn").on("click", function(){
  $("#booksBlock").show()
  $("#bookShelfDiv").hide()
})

$("#booksArrow").on("click", function() {
  $("#arrows").show()
  $("#catsAndDogs").hide()
  $("#hiddenPets").hide()
  $("#music").hide()
  $("#books").hide()
  $("#campingOutdoors").hide()
  setTimeout(function(){$("#campingOutdoors").show()},2300);
  $("#coding").hide()
  $("#arrows").fadeOut(200);
  $("#arrows").fadeIn(450);
  $("#arrows").fadeOut(350);
  $("#arrows").fadeIn(200);
  $("#arrows").fadeOut(150);
  $("#arrows").fadeIn(600);
  $("#arrows").fadeOut(250);
})

})