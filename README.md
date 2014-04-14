Uses local JSON files for simple data storage and retrieval for projects where a database isn't available/desired

## Initialization ##

Each storage "list" consists of four parts:

-	a List, which contains items
-	a button to Save data
-	a button to Load data
-	a button to Add items to the list

Items can be removed by deleting the text inside them.  

1.	Add a numeric **data-jsondb-list** attribute to your List, Save, Load, and Add elements. This prevents conflicts between multiple lists on the same page.
2.	On your list element, specify the data file in the **data-jsondb-file** attribute.  
3.	Add the appropriate **data-jsondb-role** attribute to your List, Save, Load, and New buttons.

		<!-- list -->
		<div data-jsondb-role="list" data-jsondb-list="1" data-jsondb-file="data.json"></div>

		<!-- buttons -->
		<button data-jsondb-role="load" data-jsondb-list="1">Load</button>
		<button data-jsondb-role="save" data-jsondb-list="1">Save</button>
		<button data-jsondb-role="new"  data-jsondb-list="1">Add New +</button>

<br>
In Javascript is create a new JsonDB object:

	var myStorage = new JsonDB();
  

## Options ##

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

