


var JsonDB;

JsonDB = (function(opts) {
    'use strict';
    var db = {},
        defaults = {
            dataFolder      : 'data',
            processor       : 'save.php',
        },
        roleAttr = 'data-jsondb-role',
        listAttr = 'data-jsondb-list',
        fileAttr = 'data-jsondb-file',
        xhr = new XMLHttpRequest();

// merge defaults with any supplied options

    for(var i in opts){
        defaults[i] = opts[i];
    }

    function loadData(dataFileName){
        xhr.open("GET", defaults.dataFolder + '/' + dataFileName, false);
        xhr.send();
        return xhr.response;
    }

    function saveData(data, dataFileName){
        var postData = serialize({
                file : dataFileName,
                data : data
        });
        xhr.open("POST", defaults.dataFolder + '/' + defaults.processor, false);

    // since this is sent via AJAX, we need to set the encoding type
    // to match the default for form submissions

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(postData);
       return xhr.response;
    }



    function matchesRole(el, i){
        return el.getAttribute(roleAttr) === this; 
    }


// bind default "load" and "save" buttons (less coding for user)

    function bindEvents(){
        var lists = [];

    // group all elements together based on their list number
    // which is assigned via data attributes
       
        Array.prototype.filter.call(document.querySelectorAll('['+listAttr+']'), function(el, i, arr){
            var index = parseInt(el.getAttribute('data-jsondb-list'));
            if(typeof lists[index] === 'object'){
                lists[index].push(el);
            }else{
                lists[index] = [el];
            }
        });


        Array.prototype.forEach.call(lists, function(el, i, arr){

        // "this" context for can be optionally set as an Array.filter() argument
        //  Here we sneakily use it to pas the data-attribute we want to filter on
        //   to the matchesRole() function above

            var listEl = el.filter(matchesRole, 'list')[0];
            var loadEl = el.filter(matchesRole, 'load')[0];
            var saveEl = el.filter(matchesRole, 'save')[0];
            var addEl  = el.filter(matchesRole, 'add')[0];

            var emptyChild = listEl.children[0] ? listEl.children[0] : document.createElement('div');

            var fileName = listEl.getAttribute(fileAttr);

            loadEl.onclick = function(){
                var data = db.loadData(fileName);
                listEl.innerHTML = '';
                for(var i in data){
                    var newChild = emptyChild.cloneNode(false);
                    var input = document.createElement('input');
                         input.value = data[i];
                         newChild.appendChild(input);
                    listEl.appendChild(newChild);
                }
            };

            saveEl.onclick = function(){
                var data = [];
                for(var i=0; i < listEl.childNodes.length; i++){
                    var val = listEl.childNodes[i].getElementsByTagName('input')[0].value;
                    if(val != ''){
                        data.push(listEl.childNodes[i].getElementsByTagName('input')[0].value);
                    }
                }
                db.saveData(data, fileName);
            };

            addEl.onclick = function(){
                var newChild = emptyChild.cloneNode(false);
                var input = document.createElement('input');
                     input.value = 'new item';
                     newChild.appendChild(input);
                listEl.appendChild(newChild);
            };
        });
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

    db.loadData = function(fileName){
        var data = loadData(fileName);
        if(typeof data !== 'undefined'){
            return JSON.parse(data);
        }else{
            return false;
        }
    };
    db.saveData = function(data, fileName){
        return saveData(data, fileName);
    };

    bindEvents();

    return db;

});