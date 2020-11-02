var contentEle = document.body.querySelector(".content");
var inputBox = document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var list = [];

function makeHome(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="Log-In"
  contentEle.appendChild(headEle);
} 

document.body.querySelector(".submit").addEventListener("click", function(){
if(inputBox.value == "coolStudent123"){
 list.push({
      name:inputBox.value,
    });
    renderList();
    makeText();
    makeButton();
}
 else if(inputBox.value != "coolStudent123"){
 messageBox.innerHTML="username invaild";}
})

makeHome();

function renderList(){
  document.body.querySelector(".list").innerHTML="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h3");
    itmEle.innerHTML="Name: "+list[i].name;
    document.body.querySelector(".list").innerHTML=(itmEle.innerHTML);
  }
  function View(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="View page";
  contentEle.appendChild(headEle);
} 

}
function makeText(){
  var newBox = document.createElement("INPUT");
  newBox.setAttribute("type", "text");
  newBox.setAttribute("placeholder", "Make a note");
  document.body.appendChild(newBox);
  
}
function makeButton(){
  var noteSubmit = document.createElement("BUTTON");
  var buttonText = document.createTextNode("Check Note");
  noteSubmit.appendChild(buttonText);
  document.body.appendChild(noteSubmit);
  document.body.querySelector("BUTTON").addEventListener("click", function(){
   
  })
  function noteCheck(){
    if(makeText().value=/^[0-9]+$/ && newBox.value.length>1){
      messageBox.innerHTML="Note taken!";
    }else{
      messageBox.innerHTML="Please use numbers only and type more than 1 character."
    }
  }
}