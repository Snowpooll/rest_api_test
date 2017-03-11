<?php

	header( "HTTP/1.0 200 OK" );
	echo json_encode
	(
	    array
	    (
	        'id' => $_POST['id'],
	        'password' => $_POST['password'],
	        'name' => 'asano'
	    )
	);

    exit();
?>
