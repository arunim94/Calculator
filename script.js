let inputBox=document.getElementById('inputBox');

function appendCharacter(char){
    inputBox.value+=char;
}
function clearInputBox(){
    inputBox.value="";
}
function del(){
    inputBox.value=inputBox.value.slice(0,-1);
}
function result(){
    try{
        inputBox.value=eval(inputBox.value);
    }
    catch (error){
        inputBox.value="Error"
    }
}   