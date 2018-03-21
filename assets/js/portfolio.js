$("#hamburgerBtn").mouseenter(function(){
  $("#hamburgerBtn").css("right", "11%");
})

$("#hamburgerBtn").on("click", function(){
  console.log("click received")
  $("#hamburgerBtn").animate({
    width: "100%",
    left: "0",
  }, 1800)
})