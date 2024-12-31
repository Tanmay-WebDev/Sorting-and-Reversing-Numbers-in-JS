
var names = ["Tanmay " , " Gyanendra " ," Pratyush ", "Shubh " ,"Yash"]

document.getElementById("output").innerHTML = names;

function sortMe(){
    names.sort();
    document.getElementById("output").innerHTML = names;

}

function reverseMe(){
    names.reverse()
    document.getElementById("output").innerHTML = names;

}