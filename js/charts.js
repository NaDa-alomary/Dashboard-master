
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");


// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
const labels= ['June', 'July', 'August', 'September', 'October', 'November','December'];
const myChart2 = new Chart(visitorChart, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Man',
            data: [3000, 4000, 13000, 5000, 7000, 9500, 12500],
            backgroundColor: [
                '#37315e',
                '#37315e',
                '#37315e',
                '#37315e',
                '#37315e',
                '#37315e'
            ],
            hoverBorderWidth:2,
            hoverBorderColor:'yellow'
        },{
            label: 'Women',
            data: [6000, 6000, 15000, 7000, 10000, 13000, 14500],
            backgroundColor: [
                '#da4167',
                '#da4167',
                '#da4167',
                '#da4167',
                '#da4167',
                '#da4167'
            ],
            hoverBorderWidth:2,
            hoverBorderColor:'yellow'
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
//const labels4 =['Aug1', 'Aug3', 'Aug5', 'Aug7', 'Aug9', 'Aug11', 'Aug13'];
const labels4= ['Junuary', 'February', 'March', 'April', 'May', 'June'];
const myChart4 = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: labels4,
        datasets: [{
            label: 0,
            //data: [8000, 30000, 22500, 20000, 28000, 32000, 33000, 30000, 30000, 20000, 36000, 40000],
            data: [1, 1.5, 2.5, 4, 5, 3.2],
            fill: false,
            borderColor: '#da4167',
            tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });





//-------------------
