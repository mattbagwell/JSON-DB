<?
	if(isset($_POST['file']) && isset($_POST['data'])){
		$file = $_POST['file'];
		$data = $_POST['data'];

		$save = file_put_contents($file, json_encode($data, JSON_FORCE_OBJECT));
	}

?>