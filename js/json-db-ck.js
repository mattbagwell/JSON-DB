/*

Uses local JSON files for simple data storage and retrieval
for simple projects where a database isn't available/desired



SAMPLE USE:

var myStorage = new JsonDB();



OPTIONS:

dataFileName    - name of the JSON file to store out data in
                    default: 'data.json'

dataFolder      - name of the folder containing our data file(s) 
                    default: 'data'

processor       - replace this to change the PHP file that saves the data
                    default: 'save.php'

saveTriggerID   - the ID of the element that triggers the data to be saved

loadTriggerID   - the ID of the element that triggers the data to be loaded

listID          - the ID of the parent element of the data. This can be any HTML
                    element, and items will be inserted as children (defaulting to DIV tags)


var myOpts = {
    dataFileName    : 'newdata.json',
    saveTriggerID   : 'myList-save',
    loadTriggerID   : 'myList-load',
    listID          : 'myList'
};

var myStorage = new JsonDB(myOpts);


*/var JsonDB;JsonDB=function(e){"use strict";function s(){r.open("GET",n.dataFolder+"/"+n.dataFileName,!1);r.send();return r.response}function o(e){var t=a({file:n.dataFileName,data:e});r.open("POST",n.dataFolder+"/"+n.processor,!1);r.setRequestHeader("Content-type","application/x-www-form-urlencoded");r.send(t);return r.response}function u(){var e=document.getElementById(n.listID),r=e.children[0]?e.children[0]:document.createElement("div");document.getElementById(n.loadTriggerID).onclick=function(){var n=t.loadData();e.innerHTML="";for(var i in n){var s=r.cloneNode(!1),o=document.createElement("input");o.value=n[i];s.appendChild(o);e.appendChild(s)}};document.getElementById(n.saveTriggerID).onclick=function(){var n=[];for(var r=0;r<e.childNodes.length;r++)n.push(e.childNodes[r].getElementsByTagName("input")[0].value);t.saveData(n)};document.getElementById(n.newTriggerID).onclick=function(){var t=r.cloneNode(!1);e.appendChild(r)}}function a(e,t){var n=[];for(var r in e){var i=e[r],s=t?t+"["+r+"]":r;typeof i=="object"?n.push(a(i,s)):n.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}return n.join("&")}var t={},n={dataFileName:"data.json",dataFolder:"data",processor:"save.php",saveTriggerID:"jsondb-save",loadTriggerID:"jsondb-load",listID:"jsondb-list"},r=new XMLHttpRequest;for(var i in e)n[i]=e[i];t.loadData=function(){var e=s();return typeof e!="undefined"?JSON.parse(e):!1};t.saveData=function(e){return o(e)};u();return t};