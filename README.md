Uses local JSON files for simple data storage and retrieval for projects where a database isn't available/desired

### Initialization ###

Each storage "list" consists of four parts:
-	a List which contains items
-	a button to Save data
-	a button to Load data
-	a button to Add items to the list

Items can be removed by deleting the text inside them.

Add **data-jsondb-list** attribute to your list wrapper. Also specify the file to store data using the **data-jsondb-file** attribute.
Add the appropriate **data-jsondb-role** attribute to your List, Save, Load, and New buttons.  

	<div data-jsondb-role="list" data-jsondb-list="1" data-jsondb-file="data.json"></div>
	<button data-jsondb-role="load" data-jsondb-list="1">Load</button>
	<button data-jsondb-role="save" data-jsondb-list="1">Save</button>
	<button data-jsondb-role="new"  data-jsondb-list="1">Add New +</button>


All we need to do in Javascript is create a new JsonDB object:

	var myStorage = new JsonDB();
  

### Options ###

**dataFolder**  
Name of the folder containing our data file(s)  
default: "data"

**processor**   
Replace this to change the PHP file that saves the data (in the dataFolder directory) 
default: "save.php"


#### Options example ####

Pass an object with any custom options into the JsonDB constructor

	var myOpts = {
	    dataFileName    : "newdata.json",
	    processor		: "custom-script.php"
	};

	var myStorage = new JsonDB(myOpts);

