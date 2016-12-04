var ctx = document.getElementById("myChart");
var drawChart = function (data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "5", "8", "10", "15"],
            datasets: [
                {
                    label: "Результати",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
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
};

drawChart([90, 85, 70, 65, 60, 55, 20]);

$(function () {
    $('.nav-tabs a').click(function (e) {
        switch ($(this).text()) {
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