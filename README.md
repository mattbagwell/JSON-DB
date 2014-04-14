Uses local JSON files for simple data storage and retrieval
for projects where a database isn"t available/desired

### Initialization ###

	var myStorage = new JsonDB();
  
### Usage ###

    myStorage.loadData(data);

    myStorage.saveData(data);

Where *data* is an array/object of data to be stored.


### Options ###


**dataFileName**  
Name of the JSON file to store our data in  
default: "data.json"

**dataFolder**  
Name of the folder containing our data file(s)  
default: "data"

**processor**   
Replace this to change the PHP file that saves the data  
default: "save.php"

**saveTriggerID**  
The ID of the element that triggers the data to be saved
default: "jsondb-save"

**loadTriggerID**  
The ID of the element that triggers the data to be loaded
default: "jsondb-load"

**listID**  
The ID of the data list's parent element  
This can be any HTML element - items will be inserted as children (defaulting to DIV tags)  
default: "jsondb-list"
  


#### Options example ####

Pass an object with any custom options into the JsonDB constructor

	var myOpts = {
	    dataFileName    : "newdata.json",
	    saveTriggerID   : "myList-save",
	    loadTriggerID   : "myList-load",
	    listID          : "myList"
	};

	var myStorage = new JsonDB(myOpts);

