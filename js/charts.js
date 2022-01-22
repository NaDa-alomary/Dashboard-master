
// Area Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
const labels1 =['Aug1', 'Aug3', 'Aug5', 'Aug7', 'Aug9', 'Aug11', 'Aug13'];
new Chart(ordersChart, {
    type: 'area',
    data: {
        labels: labels1,
        datasets: [{
            label: 0,
            data: [8000, 30000, 22500, 20000, 28000, 32000, 33000, 30000, 30000, 20000, 36000, 40000],
            fill: false,
            borderColor: '#da4167',
            tension: 0.4
            }]
            [{fill: 'origin'},      // 0: fill to 'origin'
            {fill: '+2'},          // 1: fill to dataset 3
            {fill: 1},             // 2: fill to dataset 1
            {fill: false},         // 3: no fill
            {fill: '-2'},          // 4: fill to dataset 2
            {fill: {value: 25}}],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
const labels2= ['June', 'July', 'August', 'September', 'October', 'November','December'];
const myChart2 = new Chart(visitorChart, {
    type: 'bar',
    data: {
        labels: labels2,
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
const labels3= ['Riyadh', 'Jeddah', 'Shargia', 'Mecca'];
const myChart3 = new Chart(citiesChart, {
    type: 'pie',
     data : {
        labels: labels3,
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100,80],
          backgroundColor: [
            '#37315e',
            '#da4167',
            '#37315e',
            '#da4167'
          ],
          hoverOffset: 4
        }]
      }
});
 

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
const labels4= ['Junuary', 'February', 'March', 'April', 'May', 'June'];
const myChart4 = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: labels4,
        datasets: [{
            label: 0,
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
