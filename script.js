let textArea = document.getElementById("textArea");
let word = document.getElementById("word");
let letter = document.getElementById("letter");

function count(){
    // Calculating the total number of words
    let wholeText = textArea.value.trimEnd();
    if(wholeText == " "){
        word.innerText = 0;
    }
    let totalWord = 0;
    let eachWord = wholeText.split(" ");
    eachWord.forEach(element => {
        element.trimEnd();
        if(element != ""){
            totalWord++;
        }
    });
    word.innerText = totalWord;

    // Calculating the total number of letters
    let eachLetter = textArea.value.split("");
    let totalLetter = 0;
    eachLetter.forEach(element => {
        if(element != " "){
            totalLetter++;
        }
    });
    letter.innerText = totalLetter;
    if(totalLetter == 0){
        word.innerText = 0;
    }
}