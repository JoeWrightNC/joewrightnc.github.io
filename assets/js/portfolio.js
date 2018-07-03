
$(document).ready(function () {

  $("body").show()
  $("#landingDiv").show()
  $("#navScreenDiv").hide()
  $("#resumeDiv").hide()
  $("#websitesDiv").hide()
  $("#gamesDiv").hide()
  $("#designDiv").hide()
  $("#artDiv").hide()
  $("#aboutDiv").hide()
  $("#cultureFitDiv").hide()
var partCounter = 2;
var seconds = 0

function surpriseDivTime() {
  $("#surpriseDiv").hide()
  $("#surpriseDiv").fadeIn(3000)
  setTimeout(function() {
    $("#surpriseDiv").fadeOut(250)}
  , 5000)
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
    width: "100vh",
    right:"-25%",
  }, 400)
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
    $("#hamburgerBtn").html("NAV")
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
      width: "10%",
      right: "10%",
      position: "absolute",
      fontSize:"small",
    }, 300)
  })
  $("#websitesBtn").on("click", function(){
    $("#hamburgerBtn").html("NAV")
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
      width: "10%",
      right: "10%",
      position: "absolute",
      fontSize:"small",
    }, 300)
  })
  $("#gamesBtn").on("click", function(){
    $("#hamburgerBtn").html("NAV")
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
      width: "10%",
      right: "10%",
      position: "absolute",
      fontSize:"small",
    }, 300)
    })
  $("#aboutBtn").on("click", function(){
    $("#hamburgerBtn").html("NAV")
    $("#landingDiv").hide()
    $("#surpriseDiv").hide()
    $("#navScreenDiv").hide()
    $("#resumeDiv").hide()
    $("#websitesDiv").hide()
    $("#gamesDiv").hide()
    $("#designDiv").hide()
    $("#artDiv").hide()
    $("#aboutDiv").show()
    $("#emailForm").hide()
    $("#cultureFitDiv").hide()
    $("#hamburgerBtn").animate({
      width: "10%",
      right: "10%",
      position: "absolute",
      fontSize:"small",
    }, 300)
  })
}

// web projects

$(".circle").hover(function(){
 $(this).addClass("flipping");
},function(){
 $(this).removeClass("flipping");
});

$("#listenHereBack").on("click", function() {
  window.open("https://joewrightnc.github.io/ListenHearApp", "_blank")
})

$("#homeSteadBack").on("click", function() {
  window.open("https://obscure-fortress-66993.herokuapp.com/", "_blank")
})
$("#vcBack").on("click", function() {
  window.open("https://joewrightnc.github.io/VacantCompany/", "_blank")
})

$("#bernarooBack").on("click", function() {
  window.open("http://www.bernaroomusicfest.com/index.html", "_blank")
})

$("#bootstrapBack").on("click", function() {
  window.open("https://joewrightnc.github.io/Bootstrap-Portfolio/index.html", "_blank")
})

$("#responsiveBack").on("click", function() {
  window.open("https://joewrightnc.github.io/Responsive-Portfolio/index.html", "_blank")
})

//games page
$("#hangmanBack").on("click", function() {
  window.open("https://joewrightnc.github.io/Hangman-Game/index.html", "_blank")
})

$("#crystalGameBack").on("click", function() {
  window.open("https://joewrightnc.github.io/Crystal-Game/index.html", "_blank")
})

$("#superSmashBack").on("click", function() {
  window.open("https://joewrightnc.github.io/week-4-game/index.html", "_blank")
})

$("#boozyTriviaBack").on("click", function() {
  window.open("https://joewrightnc.github.io/TriviaGame/", "_blank")
})

$("#netgifzBack").on("click", function() {
  window.open("https://joewrightnc.github.io/GifApp/", "_blank")
})

$("#trainGameBack").on("click", function() {
  window.open("https://joewrightnc.github.io/TrainScheduler/", "_blank")
})

$("#liriBack").on("click", function() {
  window.open("https://github.com/JoeWrightNC/liri-node-app", "_blank")
})

$("#pokedexBack").on("click", function() {
  window.open("https://github.com/JoeWrightNC/pokedex", "_blank")
})

$("#barInvBack").on("click", function() {
  window.open("https://github.com/JoeWrightNC/BarInventoryServer", "_blank")
})

$("#mtCommBack").on("click", function() {
  window.open("https://polar-lake-11720.herokuapp.com/", "_blank")
})

$("#localScrapeBack").on("click", function() {
  window.open("https://sleepy-savannah-48736.herokuapp.com/", "_blank")
})

$("#recipeSaverBack").on("click", function() {
  window.open("https://salty-ridge-97695.herokuapp.com/", "_blank")
})

$("#yogiRachBack").on("click", function() {
  window.open("https://www.thewellyogi.com/", "_blank")
})

//about page
$("#emailCol").on("click", function() {
  $("#emailForm").show()
})

$(document).on("click", "#resumeBottomImg", function() {
  $("#resumeDiv").hide()
  $("#cultureFitDiv").show()
  $("#arrows").show()
  $("#catsAndDogs").hide()
  $("#hiddenPets").hide()
  setTimeout(function(){
    $("#catLoader").hide()
    $("#catsAndDogs").show()
  },2000);
  $("#books").hide()
  $("#music").hide()
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#openSourceDiv").hide()
  $("#catLoader").show()
})

$(document).on("click", "#emailCancel", function() {
  $("#emailForm").hide()
})
setTimeout(function() {
  $("#hamburgerBtn").css("transition", "width 1.1s cubic-bezier(0.22, 0.61, 0.36, 1)")
},5000)

$(document).on("click", "#gitCol", function() {
  window.open("https://github.com/JoeWrightNC", "_blank");
})

$(document).on("click", "#linkedCol", function() {
  window.open("https://www.linkedin.com/in/joewrightnc/", "_blank");
})

//culture page

$("#cultureCol").on("click", function() {
  $("#aboutDiv").hide()
  $("#cultureFitDiv").show()
  $("#arrows").show()
  $("#catsAndDogs").hide()
  $("#hiddenPets").hide()
  setTimeout(function(){
    $("#catLoader").hide()
    $("#catsAndDogs").show()
  },2000);
  $("#books").hide()
  $("#music").hide()
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#openSourceDiv").hide()
  $("#catLoader").show()
})

$("#petPad").on("click", function() {
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
  setTimeout(function(){
    $("#catLoader").hide()
    $("#music").show()
  },1400);
  $("#recordPlayerDiv").hide();
  $("#books").hide()
  $("#campingOutdoors").hide()
  $("#coding").hide()
  $("#catLoader").show()
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
  var stopOne = document.getElementById("gameMusicSource1");
  var stopTwo = document.getElementById("gameMusicSource2");
  var stopThree = document.getElementById("gameMusicSource3");;
  stopOne.pause();
  stopTwo.pause();
  stopThree.pause();
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
  setTimeout(function(){
    $("#catLoader").hide()
    $("#books").show()
  },2000);
  $("#catLoader").show()
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

$(".leavePoemBtn").on("click", function() {
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
  $("#coding").hide()
  $("#openSourceDiv").hide()
  $("#emailForm").hide()
  setTimeout(function(){
    $("#catLoader").hide()
    $("#aboutDiv").show()
  },2000);
  $("#catLoader").show()
})

})