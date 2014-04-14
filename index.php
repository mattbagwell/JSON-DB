<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Sample Json Data Storage</title>

	<link type="text/css" rel="stylesheet" href="css/main.css">
	<script type="text/javascript" src="js/json-db.js"></script>
	<script type="text/javascript">

	window.onload = function(){

		var myOpts = {
			dataFileName : 'newdata.json'
		};

		var myStorage = new JsonDB(myOpts);
	}

	</script>


</head>

<body>

<div id="wrapper">
	
	<h3>This is a simple Javascript module to store data in JSON files.</h3>
	<p>Click the buttons below to load and save your data.</p>
	<p><a href="js/json-db.js" target="_blank">View the source.</a></p>
	<p><a href="json-db.zip">Download</a></p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>

	<h3>A List</h3>
	<div data-jsondb-role="list" data-jsondb-list="1" data-jsondb-file="data.json"></div>
	<button data-jsondb-role="load" data-jsondb-list="1">Load</button>
	<button data-jsondb-role="save" data-jsondb-list="1">Save</button>
	<button data-jsondb-role="add" data-jsondb-list="1">Add New +</button>

	<p>&nbsp;</p>
	<p>&nbsp;</p>

	<h3>Another List</h3>
	<div data-jsondb-role="list" data-jsondb-list="2" data-jsondb-file="newdata.json"></div>
	<button data-jsondb-role="load" data-jsondb-list="2">Load</button>
	<button data-jsondb-role="save" data-jsondb-list="2">Save</button>
	<button data-jsondb-role="add" data-jsondb-list="2">Add New +</button>



</div>

</body>
</html>