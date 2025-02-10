<?php
// Include the data from random.php
include 'random.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bar Chart with Random Data</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* Make the canvas take up the full height of the viewport */
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        canvas {
            width: 100%;
            height: 100vh;
            /* Full height of the viewport */
        }

        h1 {
            position: absolute;
            top: 20px;
            left: 20px;
            color: #333;
            z-index: 10;
            /* Ensure the title appears above the canvas */
        }
    </style>
</head>

<body>

    <h1>Bar Chart with Random Data</h1>
    <canvas id="myChart"></canvas>

    <script>
        // Prepare data from PHP
        const data = <?php echo json_encode($data); ?>;

        // Extract names and values for X and Y axes
        const labels = data.map(item => item.name);
        const values = data.map(item => item.value);

        // Generate random colors for bars
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        const backgroundColors = values.map(() => getRandomColor());

        // Create the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Values',
                    data: values,
                    backgroundColor: backgroundColors,
                    borderColor: backgroundColors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            beginAtZero: true,
                            stepSize: 50, // Ensures no decimal points, and has at least 5 ticks
                            callback: function(value) {
                                return value % 100 === 0 ? value : ''; // Only show multiples of 100 on Y axis
                            }
                        }
                    }
                }
            }
        });
    </script>

</body>

</html>