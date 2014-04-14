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
			dataFileName	: 'newdata.json',
			saveTriggerID	: 'myList-save',
			loadTriggerID	: 'myList-load',
			listID			: 'myList'
		};

		var myStorage = new JsonDB(myOpts);
	}

	</script>


</head>

<body>

<div id="wrapper">
	
	<h3>This is a simple Javascript module to store data locally in JSON files.</h3>
	<p>Click the buttons below to load and save your data.</p>
	<p><a href="js/json-db.js" target="_blank">View the source.</a></p>
	<p><a href="json-db.zip">Download</a></p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>

	<div id="myList"></div>

	<button id="myList-load">Load</button>
	<button id="myList-save">Save</button>
	<button id="jsondb-new">Create New +</button>

</div>

</body>
</html>