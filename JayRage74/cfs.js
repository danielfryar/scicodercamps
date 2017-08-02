var button = document.getElementById("button");
button.addEventListener('click', function(){
var paragraph = document.getElementById("paragraph").value;
console.log(paragraph);
//document.getElementById("wordCount").innerHTML=paragraph;

  var spaces=0;
  var periods=0;
  var words=0;
  for (var i=0; i < paragraph.length; i++){
  if (paragraph[i]== ' '){
    spaces++;
  }
  if (paragraph[i]=='.'){
    periods++;
  }



}
words= spaces +1;
document.getElementById("wordCount").innerHTML +=words;
document.getElementById("sentenceCount").innerHTML +=periods;
document.getElementById("wordsPerSentence").innerHTML +=words/periods;
document.getElementById("spacesCount").innerHTML+=spaces;
})
