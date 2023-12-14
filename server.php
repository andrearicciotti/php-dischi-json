<?php
$string = file_get_contents('dischi.json'); // prelevo il file json 
// var_dump($string);

header('Content-Type: application/json'); // Facciamo capire al browser il tipo di file
echo ($string); // Mandiamo il file json

?>
