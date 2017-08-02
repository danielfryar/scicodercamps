

// function eatASentence(paragraph) {
//   indexOfFirstPeriod = paragraph.indexOf(".");
//   firstSentence = paragraph.slice(0, indexOfFirstPeriod);
//   return paragraph.slice(indexOfFirstParagraph +2, paragraph.length);
//
// }
//
// function countSentences(paragraph) {
//   var sentence = 0;
//   while (paragraph.length > 0){
//     paragraph = eatASentence(paragraph);
//     sentence++;
//
//   }
//   return sentence;
// }
//
//
// function eatAWord (paragraph) {
//   indexOfSpace = paragraph.indexOf(" ");
//   firstWord = paragraph.slice(0, indexOfFirstSpace);
//   return paragraph.slice(indexofFirstParagraph +1, paragraph.length);
//
// }
//
// function countWords (paragraph){
//   var word = 0;
//   while (paragraph.length > 0) {
//     paragraph = eatAWord(paragraph);
//     word++;
//
//   }
// }
var button = document.getElementById("myButton");
button.addEventListener('click',function(){
 var paragraph = document.getElementById("paragraph").value;
 console.log(paragraph);
 document.getElementById("numberOfWords").value = paragraph;
var spaces = 0;
var periods = 0;
for (var i = 0; i < paragraph.length; i++) {
  if (paragraph[i]== ' ') {
    spaces++;
    }
    if (paragraph[i]== '.') {
      periods++;
    }
}
words = spaces + 1;
document.getElementById('numberOfWords').innerHTML += words;
console.log(periods);
document.getElementById('sentences').innerHTML += periods;
document.getElementById('wordsPerSentence').innerHTML += words/periods;
console.log(spaces);
document.getElementById('numberOfSpaces').innerHTML += spaces;


})
