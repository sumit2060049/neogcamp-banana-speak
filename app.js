//  console.log("hello!script is working form a different file")

//  var username=prompt("give me your username")
//  alert("this scritpt works "+username)

var btnTranslate = document.querySelector("#btn-translate");
//console.log(btnTranslate);
function clickHandler(){
    alert("hello");
}
 btnTranslate.addEventListener("click",/*function clickEventHandler(){
     console.log("clicked")
    // alert("clicked")
}*/clickHandler)
