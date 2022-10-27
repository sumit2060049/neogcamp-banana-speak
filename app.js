//  console.log("hello!script is working form a different file")

//  var username=prompt("give me your username")
//  alert("this scritpt works "+username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

//outputdiv.innerText="tanay pratap";

//console.log(outputdiv);

//console.log(btnTranslate);
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/minion.json"
	

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server:try again after some time")
}
function clickHandler(){
    //console.log("clicked");
    //console.log("input",txtInput.value);
   // outputdiv.innerText="ajsjsjsjsjjs "+txtInput.value;
   var inputText=txtInput.value;
   fetch(getTranslationURL(inputText))
   .then(response => response.json() )
   .then(json => {
    var translatedText=json.contents.translated;
    outputdiv.innerText=translatedText;
    
   })
   .catch(errorHandler)

   //.then(json => console.log(json.contents.translated))
   
};
 btnTranslate.addEventListener("click",/*function clickEventHandler(){
     console.log("clicked")
    // alert("clicked")
}*/clickHandler)
