<?php

define("TOTAL_LIBROS",1000);
define("MAXIMO_LIBROS",10);


$retiroDeLibros = 11;

if ($retiroDeLibros > MAXIMO_LIBROS ) {
    echo "No puedes retirar mas de ". MAXIMO_LIBROS;
}