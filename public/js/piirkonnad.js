'use strict';

$(function() {
    var piirkonnaddata = {
            labels:["Tartu", "Valga", "Tallinn", "Elva"],
            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [2803, 1345, 3623, 1230]
                }
            ]
        };

    var options= {
        scaleBeginAtZero : true
    };

    var ctx = $("#piirkonnad").get(0).getContext("2d");
    var piirkonnad = new Chart(ctx).Bar(piirkonnaddata, options);
});

