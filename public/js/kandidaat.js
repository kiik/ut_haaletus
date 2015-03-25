'use strict';

$(function() {
    var kandidaatdata = {
            labels:["Sheldon Cooper", "Penny", "Leonard Hofstadter", "Howard Wolowitz", "Raj Koothrappali"],
            datasets: [
                {
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
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

