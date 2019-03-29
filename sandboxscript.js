function writejimmy(){
    var title = document.getElementById("title").value;
    writeJames(title);
}
function writeJames(title){
    if(title!=="something"){
        document.getElementById("jimmy").innerHTML = title;
    }else{
        document.getElementById("jimmy").innerHTML = "NOT VAILD";
    }
 
}
     