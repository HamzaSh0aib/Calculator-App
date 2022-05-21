function getvalue(num){
    var input = document.getElementById("userinput");
    input.value += num
    console.log(input.value )
}

function totalvalue (){
    var input = document.getElementById("userinput");
   input.value = eval(input.value);
}

function allclear (){
    var input = document.getElementById("userinput");
    input.value = "";
}

function oneclear (){
    
    var input = document.getElementById("userinput");
    console.log(input.value)
    input.value = input.value.slice(0 ,-1);

}
