var display=document.querySelector(".display")


  
function addvalue(elementVal){
  display.value += elementVal
}

function clearval()
{
  display.value=" "
}
function del(){
  display.value=display.value.slice(0,length-1)
}
function calculate()
{
display.value=eval(display.value)
}


