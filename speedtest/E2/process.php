<?php
// Create an array with numbers 1 to 40
$array = range(1, 40);

// Get the factor from the URL parameter
$factor = isset($_GET['factor']) ? (int)$_GET['factor'] : 1;

// Modify the array to indicate multiples of the factor
foreach ($array as &$value) {
    if ($value % $factor == 0) {
        $value = "multiple of $factor";
    }
}

// Output the modified array
echo '<pre>';
print_r($array);
echo '</pre>';
