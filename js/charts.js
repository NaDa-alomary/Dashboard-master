
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
const labels= ['June', 'July', 'August', 'September', 'October', 'November','December'],
const myChart = new Chart(visitorChart, {
    type: 'bar',
    data: {
        labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 

// Pie Chart for Cities
var citiesChart = document.getElementById("myPieChart");


// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
