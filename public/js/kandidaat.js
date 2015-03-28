

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return decodeURI(pair[1]);}
       }
       return(false);
}



$(document).ready(
	function(){
		document.getElementById("kandidaadi_number").innerHTML += getQueryVariable("kandidaadi_number");
		document.getElementById("eesnimi").innerHTML += getQueryVariable("eesnimi");
		document.getElementById("perenimi").innerHTML += getQueryVariable("perenimi");
		document.getElementById("erakond").innerHTML += getQueryVariable("erakond");
	}
);
