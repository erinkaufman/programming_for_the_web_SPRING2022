//const recognizePuppers = function (pupArray) {
    //for (let i = 0; i < pupArray.length; i++) {
        //console.log('My dog ' + pupArray[i] + ' is a really good puppy.');
    //}
//}
//recognizePuppers(['Lucky', 'Lucy', 'Limda', 'Lacey', 'Carl']);

//const makeSandwich = function (ingredientArray) {
    //for(let i = 0; i < ingredientArray.length; i++) {
        //console.log('get', ingredientArray[i]);
    //}
//}
//makeSandwich(['bread', 'mayo', 'tunafish']);

//for(let i = 0; i < 10; i++) {
    //console.log('this is i', i);
//}

//let greekMythicalCharacters = ["Athena", "Zeus", "Hermes", "Hercules", "Hera", "that one guy"];
//greekMythicalCharacters.splice(5, 1, 'Hades');
//console.log(greekMythicalCharacters);

let button;
function setup() {
    createCanvas(500, 500);
    background('pink');
    button = createButton('play again');
    button.position(100, 100);
    button.mousePressed(restartGame);
}

function restartGame() {
    window.location.reload();
}

//function draw() {
  //submitAnswerButton = createButton('play again');
  //submitAnswerButton.size(200, 50);
  //submitAnswerButton.mousePressed();

  //submitAnswerButton.position(100, 325);
//}