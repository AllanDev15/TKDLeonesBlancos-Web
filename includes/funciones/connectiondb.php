<?php

$con = new mysqli('localhost', 'root', 'fosa980515', 'leonesblancos');

if ($con->connect_error) {
    echo $con->connect_error;
}

$con->set_charset('utf8');
