
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
