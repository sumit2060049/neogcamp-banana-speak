//  console.log("hello!script is working form a different file")

//  var username=prompt("give me your username")
//  alert("this scritpt works "+username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

//outputdiv.innerText="tanay pratap";

//console.log(outputdiv);

//console.log(btnTranslate);
function clickHandler(){
    //console.log("clicked");
    //console.log("input",txtInput.value);
    outputdiv.innerText="ajsjsjsjsjjs "+txtInput.value;
}
 btnTranslate.addEventListener("click",/*function clickEventHandler(){
     console.log("clicked")
    // alert("clicked")
}*/clickHandler)
