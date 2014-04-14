


var JsonDB;

JsonDB = (function(opts) {
    'use strict';
    var db = {},
        defaults = {
            dataFileName    : 'data.json',
            dataFolder      : 'data',
            processor       : 'save.php',
            saveTriggerID   : 'jsondb-save',
            loadTriggerID   : 'jsondb-load',
            newTriggerID    : 'jsondb-new',
            listID          : 'jsondb-list'
        },
        xhr = new XMLHttpRequest();

// merge defaults with any supplied options

    for(var i in opts){
        defaults[i] = opts[i];
    }

    function loadData(){
        xhr.open("GET", defaults.dataFolder + '/' + defaults.dataFileName, false);
        xhr.send();
        return xhr.response;
    }

    function saveData(data){
        var postData = serialize({
                file : defaults.dataFileName,
                data : data
        });
        xhr.open("POST", defaults.dataFolder + '/' + defaults.processor, false);

    // since this is sent via AJAX, we need to set the encoding type
    // to match the default for form submissions

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(postData);
       return xhr.response;
    }


// bind default "load" and "save" buttons (less coding for user)

    function bindEvents(){
        var list = document.getElementById(defaults.listID);
        var emptyChild = list.children[0] ? list.children[0] : document.createElement('div');

        document.getElementById(defaults.loadTriggerID).onclick = function(){
            var data = db.loadData();
            list.innerHTML = '';
            for(var i in data){
                var newChild = emptyChild.cloneNode(false);
                var input = document.createElement('input');
                     input.value = data[i];
                     newChild.appendChild(input);
                list.appendChild(newChild);
            }
        };

        document.getElementById(defaults.saveTriggerID).onclick = function(){
            var data = [];
            for(var i=0; i < list.childNodes.length; i++){
                data.push(list.childNodes[i].getElementsByTagName('input')[0].value);
            }
            db.saveData(data);
        };

        document.getElementById(defaults.newTriggerID).onclick = function(){
            var newChild = emptyChild.cloneNode(false);
            var input = document.createElement('input');
                 input.value = 'new item';
                 newChild.appendChild(input);
            list.appendChild(newChild);
        };
      
    }


// serialize an object so it can be passed as form data via POST,
// iterating through any nested objects

    function serialize(obj, nested){
        var qs = [];
        for(var i in obj){
            var val = obj[i];
            var parent = nested ? nested + '['+i+']' : i;

            if(typeof val === 'object'){
                qs.push(serialize(val, parent));
            }else{
                qs.push(encodeURIComponent(parent) + '=' + encodeURIComponent(val));
            }
        }
        return qs.join('&');
    }

    db.loadData = function(){
        var data = loadData();
        if(typeof data !== 'undefined'){
            return JSON.parse(data);
        }else{
            return false;
        }
    };
    db.saveData = function(data){
        return saveData(data);
    };

    bindEvents();

    return db;

});