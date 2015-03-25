var person1 = ["101","Ene","Ergma", "Erakond Isamaa ja Res Publica Liit", "100"];
var person2 = ["102","Tõnu","Lehtsaar", "Erakond Isamaa ja Res Publica Liit", "200"];

var person3 = ["666","Edgar", "Savisaar", "Eesti Keskerakond", "300"];
var person4 = ["667","Kadri", "Simson", "Eesti Keskerakond", "400"];

var person4 = ["422","Ants", "Laaneots", "Eesti Reformierakond", "500"];
var person5 = ["421","Taavi", "Rõivas", "Eesti Reformierakond", "600"];

var person6 = ["501","Sven", "Mikser","Sotsisaaldemokraatlik Erakond", "700"];
var person7 = ["502","Indrek", "Saar","Sotsisaaldemokraatlik Erakond", "800"];

var candidates = [person1, person2, person3,person4,person5, person6, person7];


function buildTable(){
    document.getElementById("table_comes_here").innerHTML = ""+createTable();
}


function createBody(){
    var start ='<tbody>'
        var end = '</tbody>'
        for (i = 0; i < candidates.length; i++) {
            console.log("here");
            start = start + personHtmlTr(candidates[i]);
        }
    start += end;
    return start;
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
        '<th>Häälte arv</th>'+
        '</tr>'+
        '</thead>';
    var end = '</table>';
    return start + createBody() + end;
}

function personHtmlTr(person){
    return "<tr><td>"+person[0]+"</td><td>"+person[1]+"</td><td>"+person[2]+"</td><td>"+person[3]+"</td></tr>";
}
