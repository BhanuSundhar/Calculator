function display(str){
    document.getElementById('text-area').value += str;
}
function reset(){
    document.getElementById('text-area').value = null;
}
function calculate(){
    let Values = document.getElementById('text-area').value;
    let number = eval(Values);
    document.getElementById('text-area').value = number;
}

