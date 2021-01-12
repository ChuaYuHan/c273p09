$(document).ready(function () {

    var data = [];
    var labels = [];

    $.ajax({
        type: "GET",
//        url: "http://localhost/C273/C273_L09CloudNine/getStatistics.php",
        url: "https://p09-19020844.azurewebsites.net/getCountryDetails.php",
        data: "population=" + data + "country=" + labels,
        cache: false,
        dataType: "JSON",
        success: function (response) {
            var message = "";
            for (i = 0; i < response.length; i++) {
                data.push(response[i].population);
                labels.push(response[i].country);
            }

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
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });
});
