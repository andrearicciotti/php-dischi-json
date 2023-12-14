<?php
$json = file_get_contents('dischi.json'); // prelevo il file json 
var_dump($json);

header('Content-Type: application/json'); // Facciamo capire al browser il tipo di file
echo $json; // Mandiamo il file json

?>
