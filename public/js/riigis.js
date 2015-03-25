'use strict';

$(function() {
    var riigidata = {
            labels:["Tartumaa", "Valgamaa", "Harjumaa"],
            datasets: [
                {
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
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

