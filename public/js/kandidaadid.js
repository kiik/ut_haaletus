

/*
person on rida andmebaasist.
nt. midagi taolist.

SELECT valimine.kandidaadi_number, eesnimi, perenimi, erakond.nimi
FROM kandidaat INNER JOIN valimine ON valimine.kandidaat_id = kandidaat.id
*/

var person1 = ["101","Ene","Ergma", "Erakond Isamaa ja Res Publica Liit"];
var person2 = ["102","Tõnu","Lehtsaar", "Erakond Isamaa ja Res Publica Liit"];

var person3 = ["666","Edgar", "Savisaar", "Eesti Keskerakond"];
var person4 = ["667","Kadri", "Simson", "Eesti Keskerakond"];

var person4 = ["422","Ants", "Laaneots", "Eesti Reformierakond"];
var person5 = ["421","Taavi", "Rõivas", "Eesti Reformierakond"];

var person6 = ["501","Sven", "Mikser","Sotsisaaldemokraatlik Erakond"];
var person7 = ["502","Indrek", "Saar","Sotsisaaldemokraatlik Erakond"];

/*
see on siis list, mida on saadud andmbaasist. vastavalt eelnevale l6igule
*/

var candidates = [person1, person2, person3,person4,person5, person6, person7];

function buildTable(){
    document.getElementById("table_comes_here").innerHTML = ""+createTable();
}

function createBody(){
    var body ='<tbody>'
	for (i = 0; i < candidates.length; i++) {
		console.log("here");
  		body = body + personHtmlTr(candidates[i],i);
  	}
    body += '</tbody>';
    return body;
}
function createTable(){
    var start = ' ' +
        '<table id="table_id" class="display">' +
        '<thead>' +
        '<tr>' +
        '<th>Kandidaadi number</th>'+
        '<th>Eesnimi</th>'+
        '<th>Perenimi</th>' +
        '<th>Erakond</th>'+
        '</tr>'+
        '</thead>';
    return start + createBody() + '</table>';
}

function personHtmlTr(person,id){
	var tr = "<tr id='"+id+"' onClick='lookCandidate("+id+")'>";
	var i;
	for(i in person){
		tr +="<td>" + person[i] + "</td>";
	}
	return tr += "</tr>";
}

$(document).ready(function(){
		buildTable();
		$('#table_id').DataTable();

	}
);

/*
kui kandidaadi rea peale vajutades, suunab edasi selle kandidaadi lehele

note: oleks parem, kui siin saaks mitte indexite j2rgi valida v22rtuseid, vaid oleks, et peron oleks object.
*/
function lookCandidate(tr_id){
	var columns = ["kandidaadi_number", "eesnimi", "perenimi", "erakond"];

	var tr = document.getElementById(tr_id);
	var tds = tr.getElementsByTagName('td');

	var url = "kandidaat?";
	for(i in tds){
		if(i == 0){
			url += columns[i] +"="+tds[i].innerHTML;
		}
		else{
			url += "&"+columns[i] +"="+tds[i].innerHTML;
		}
	}

	window.location.href = url;
}


