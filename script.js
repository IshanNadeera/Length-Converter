//Declaring variables

var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue, outputTypeValue;

//add Event Listner
input.addEventListener("keyup",myOutput);
inputType.addEventListener("change",myOutput);
outputType.addEventListener("change",myOutput);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function myOutput(){
   
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    //Centimeters to Km,m,cm

    if(inputTypeValue === "centimeter" && outputTypeValue === "kilometer"){
        output.value = Number(input.value) * 0.00001 +" Km";
    }

    else if(inputTypeValue === "centimeter" && outputTypeValue === "meter"){
        output.value = Number(input.value) * 0.01 +" m";
    }

    else if(inputTypeValue === "centimeter" && outputTypeValue === "centimeter"){
        output.value = input.value+" cm";
    }


    //meters to Km,m,cm


    if(inputTypeValue === "meter" && outputTypeValue === "kilometer"){
        output.value = Number(input.value) * 0.001 +" Km";
    }

    else if(inputTypeValue === "meter" && outputTypeValue === "centimeter"){
        output.value = Number(input.value) * 100 +" cm";
    }

    else if(inputTypeValue === "meter" && outputTypeValue === "meter"){
        output.value = input.value+" m";
    }


    //kilometers to Km,m,cm


    if(inputTypeValue === "kilometer" && outputTypeValue === "meter"){
        output.value = Number(input.value) * 1000 + " m";
    }

    else if(inputTypeValue === "kilometer" && outputTypeValue === "centimeter"){
        output.value = Number(input.value) * 100000 +" cm";
    }

    else if(inputTypeValue === "kilometer" && outputTypeValue === "kilometer"){
        output.value = input.value+" Km";
    }

    
}