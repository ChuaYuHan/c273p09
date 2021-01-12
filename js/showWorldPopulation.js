$(document).ready(function () {

    var data = [10, 20, 30, 40, 50];
    var labels = ["Singapore", "Malaysia", "Thailand", "Vietnam", "Myanmar"];

    var barChart = new Chart($("#barChart"), {
        type: 'horizontalBar',
        data: {
            datasets: [{
                    data: data,
                    backgroundColor: "lightblue",
                    label: 'Population'
                }],
            labels: labels
        },
        options: {
            responsive: true
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost/C273/C273_L09CloudNine/getStatistics.php",
        data: "population=" + data + "country=" + labels,
        cache: false,
        dataType: "JSON",
        success: function (response) {
            var message = "";
            for (i = 0; i < response.length; i++) {
                message += response[i].country + response[i].population;
            }
            $("#worldTable").html(message);
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });

});
