'use strict';
$(function() {
    var parteiddata = {
            labels:["Rohelised", "Kollased", "Punased"],
            datasets: [
                {
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: [3423, 2563, 2946]
                }
            ]
        };

    var options= {
        scaleBeginAtZero : true
    };

    var ctx = $("#parteid").get(0).getContext("2d");
    var parteid = new Chart(ctx).Bar(parteiddata, options);
});


