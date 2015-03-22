'use strict';

$(function() {
    var riigidata = {
            labels:["Tartumaa", "Valgamaa", "Harjumaa"],
            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [4034, 1345, 3623]
                }
            ]
        };

    var options= {
        scaleBeginAtZero : true
    };

    var ctx = $("#riigis").get(0).getContext("2d");
    var riigis = new Chart(ctx).Bar(riigidata, options);
});

