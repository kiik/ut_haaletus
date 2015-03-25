'use strict';

$(function() {
    var piirkonnaddata = {
            labels:["Tartu", "Valga", "Tallinn", "Elva"],
            datasets: [
                {
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
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

