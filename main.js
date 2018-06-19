//Global Score
let nameScore = 0;
let computerScore = 0;
let name;
let logo = "bplogo.png";


//Say Hi to the Player
document.getElementById("name-button").addEventListener("click", function(){
  name = $("[name=user-name]").val();
  alert("Hi " + name + ". Are you ready to play?");
});


//Randomize the images
function randomizeImage(){
  let imageNumber = Math.floor(Math.random() * 3);
  const image = ["blackpanther.png", "killmonger.png", "shuri.png"];
  let newImage = image[imageNumber]
  return (newImage);
}

//Determine Winner



//Click on a Card
$(".cards").on("click", ".face-card", function(){
  let randomImage = randomizeImage();
  $(this).closest("img").attr("src", randomImage);
  if (randomImage === "shuri.png") {
    nameScore += 5;
    if (nameScore === 15){
      $("#text").text(name + ", You won!");
    } else {
      $("#text").text("Your score is: " + nameScore + ". The computer score is " + computerScore + ".");
    }
  } else {
    computerScore += 5;
    if (computerScore === 15) {
      $("#text").text("Sorry, " + name + " the computer won!");
    } else {
      $("#text").text("Your score is: " + nameScore + ". The computer score is " + computerScore + ".");
    }
      }
  $("#tryagain-button").on("click", () => {
    $(this).attr("src", logo);
  });

});



//Score function



//if (state === "back") {
  //        $("#card").attr("src", "images/ace_of_spades.png");
  //        state = "front";
  //      } else {
  //        $("#card").attr("src", "images/card_back.png");
  //        state = "back";
  //      }

//document.querySelector('.cards').addEventListener('click', function(){

  //let imageDOM = document.querySelector(this);
  //diceDOM.style.display = 'block';
  //diceDOM.src = image + '.png';

/*Change players, Update Scores - Function */

