<?php
	if (isset($_GET['id'])) 
	{
		$filename = $_GET['id'];
		echo 'data:image/jpg;base64,' . base64_encode(file_get_contents(realpath('./'.$filename)));
		//echo 'data:image/jpg;base64,' . base64_encode(file_get_contents(realpath('./'.'1.jpg')));
		//echo ($filename);
	}
?>
