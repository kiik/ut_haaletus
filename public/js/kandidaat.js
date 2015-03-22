'use strict';

$(function() {
    var kandidaatdata = {
            labels:["Sheldon Cooper", "Penny", "Leonard Hofstadter", "Howard Wolowitz", "Raj Koothrappali"],
            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [45, 1783, 1034, 723, 1434]
                }
            ]
        };

    var options= {
        scaleBeginAtZero : true
    };

    var ctx = $("#kandidaadid").get(0).getContext("2d");
    var kandidaadid = new Chart(ctx).Bar(kandidaatdata, options);
});

