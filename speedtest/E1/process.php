<?php
function readCSV($file)
{
    $rows = array();
    if (($handle = fopen($file, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            // Assuming one column in CSV, adjust if more columns
            $rows[] = trim($data[0]); // Trim extra spaces
        }
        fclose($handle);
    }
    return $rows;
}

if (
    $_FILES['actualAnswers']['error'] === UPLOAD_ERR_OK &&
    $_FILES['submittedAnswers']['error'] === UPLOAD_ERR_OK
) {

    $actualAnswers = readCSV($_FILES['actualAnswers']['tmp_name']);
    $submittedAnswers = readCSV($_FILES['submittedAnswers']['tmp_name']);

    // Check if both files have the same number of answers
    if (count($actualAnswers) != count($submittedAnswers)) {
        echo 'Error: The number of answers in both files does not match.';
        exit;
    }

    $totalQuestions = count($actualAnswers);
    $correctAnswers = 0;

    echo '<table border="1">';
    echo '<tr><th>Question</th><th>Actual Answer</th><th>Submitted Answer</th></tr>';

    for ($i = 0; $i < $totalQuestions; $i++) {
        $isCorrect = ($actualAnswers[$i] == $submittedAnswers[$i]);
        if ($isCorrect) {
            $correctAnswers++;
        }
        echo '<tr>';
        echo '<td>' . ($i + 1) . '</td>';
        echo '<td>' . htmlspecialchars($actualAnswers[$i]) . '</td>';
        echo '<td>' . htmlspecialchars($submittedAnswers[$i]) . '</td>';
        echo '</tr>';
    }

    echo '</table>';
    echo '<p>Score: ' . $correctAnswers . '/' . $totalQuestions . '</p>';

    // Display feedback based on score
    if ($correctAnswers == $totalQuestions) {
        echo '<p>Great job! You answered all questions correctly.</p>';
    } elseif ($correctAnswers > $totalQuestions / 2) {
        echo '<p>Good job! You got more than half correct.</p>';
    } else {
        echo '<p>Keep practicing to improve your score.</p>';
    }
} else {
    echo 'Error uploading files.';
}
