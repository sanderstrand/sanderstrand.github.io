function myFunction() {

	navn = document.getElementById("navn").value;
	melding = document.getElementById("melding").value;
    document.getElementById("comment").innerHTML = 
    document.getElementById("comment").innerHTML + melding +  "<div style = \"color:gray\"> (" + navn + ") </div>" 
    
}
document.getElementById("svar1").addEventListener("click", myFunction);


