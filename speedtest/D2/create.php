<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create DOC File</title>
</head>

<body>

    <?php

    // Include the HTML_TO_DOC class
    include_once 'test_php_doc.php';

    // Check if the form is submitted
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Retrieve form data
        $title = $_POST['title'];
        $description = $_POST['description'];

        // Initialize HTML_TO_DOC class
        $htd = new HTML_TO_DOC();

        // Set the title and file name for the DOC file
        $htd->setTitle($title);

        // Prepare HTML content with title and description
        $htmlContent = "<h1>$title</h1><p>$description</p>";

        // Create the DOC file and force download
        $htd->createDoc($htmlContent, "$title.doc", true);
        exit;
    }
    ?>

    <h1>Create a DOC File</h1>
    <form action="create.php" method="POST">
        <input type="text" placeholder="File title" name="title" required><br /><br />
        <textarea name="description" cols="30" rows="10" placeholder="File content" required></textarea><br />
        <input type="submit" value="Create">
    </form>

</body>

</html>