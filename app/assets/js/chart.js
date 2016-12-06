var ctx = document.getElementById("myChart");
var chart = null;
var previous = null;
var drawChart = function (data) {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "5", "8", "10", "15"],
            datasets: [
                {
                    label: "Результати",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#fff",
                    borderColor: "#b2bb47",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#b2bb47",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#b2bb47",
                    pointHoverBorderColor: "#b2bb47",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: data,
                    spanGaps: false
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 20,
                        max: 100
                    }
                }]
            }
        }
    });
    if (previous != null) {
        previous.destroy();
    }
    previous = chart;
};

var tab = $('#myTab');
tab.find('> li:nth-child(' + 1 + ')').find('a').tab('show');
drawChart([90, 85, 70, 65, 60, 55, 20]);

var previousTab = null;
$(function () {
    $('.nav-tabs a').click(function (e) {
        if (previousTab != null) {
            previousTab.css("color", "grey");
        }
        var currentTab = $(this);
        currentTab.css("color", "green");
        previousTab = currentTab;
        
        switch (currentTab.text()) {
            case "Wanga-R":
                drawChart([90, 85, 70, 65, 60, 55, 20]);
                break;
            case "Wanga-I":
                drawChart([95, 90, 89, 82, 67, 60, 40]);
                break;
            case "Wanga-N":
                drawChart([100, 95, 95, 85, 72, 70, 68]);
                break;
            case "Wanga-0":
                drawChart([100, 99, 98, 90, 70, 60, 50]);
                break;
            case "Zet":
                drawChart([100, 99, 99, 80, 79, 72, 70]);
                break;
        }
    });
});