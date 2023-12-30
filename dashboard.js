document.addEventListener('DOMContentLoaded', function () {
    const initialData1 = [50000,45000,40000,35000,30000,25000,15000,20000,15000,10000,50000,0];
    const initialLabels1 = ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'];
    createChart(initialLabels1, initialData1, 'bar', 'myChart1');

    const initialData2 = [140000, 120000, 100000, 80000, 60000, 40000,20000,0];
    const initialLabels2 = ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintainance','Material Sale'];
    createChart(initialLabels2, initialData2, 'bar', 'myChart2');

    window.updateChart = function () {
        const chartType = document.getElementById('selectChart').value;
        createChart(initialLabels1, initialData1, chartType, 'myChart1');
        createChart(initialLabels2, initialData2, chartType, 'myChart2');
    };
});

function createChart(labels, data, chartType, canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: '#2ec3a8',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false // Set display to false to hide the legend
                }
            }
        }
    });
}
