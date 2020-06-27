function takenumber(number)
{
     var result=document.getElementById("result");
     result.value +=number;
}
function clearresult()
{
    var result=document.getElementById("result");
    result.value="0";
}
function getresult(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}