text = document.getElementById("display");

function num(input){
  text.value += input;
}

function calc(){
  try{
  text.value = eval(text.value);
}
catch(error){
  text.value = "Error";
}
}

function rem(){
  text.value  = " " ; 
}