google.load('visualization', '1', {'packages':['corechart', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/chart', function(response) {
        console.log(response);
        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.travel, item.price, item.reservations]);        
        }

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'travel');
        data.addColumn('number', 'price');
        data.addColumn('number', 'reservations');
        data.addRows(chartData);

        var options = {
            title: 'Travels',
            bars: 'horizontal', // Required for Material Bar Charts.
            series: {
                0: { axis: 'price' },
                1: { axis: 'reservations'}
            },
            axes: {
                x: {
                    price: {label: 'price'},
                    price: {side: 'top', label: 'reservations'}
                }
            }
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.BarChart(document.getElementById('barchart'));
        chart.draw(data, options);
    }, 'json');
}

