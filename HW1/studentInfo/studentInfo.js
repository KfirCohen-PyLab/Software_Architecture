// Business Logic Tier - logic related to the presentation tier

function verifyInput(){
	var id = document.getElementById('id').value;
	var name = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var address = document.getElementById('addr').value;
	var lang = document.getElementById('lang').value;
	var low = document.getElementById('low').checked;
	var medium = document.getElementById('medium').checked;
	var high = document.getElementById('high').checked;
	var knowlage = low ? "low" : (medium ? "medium" : (high ? "high" : "none"));
	var alertMsg = "";
	if((trim(name) == '') || (trim(lastName) == '')) {
		alertMsg = alertMsg + "Please enter a right first name and a right last name.";
	}
	if(trim(id).length != 9) {
		alertMsg = alertMsg + "\nPlease enter id with 9 digits.";
	}
	if(alertMsg != '') {
		alert (alertMsg);
	}
	else {
		var fullName = name + " " + lastName;
		var info = fullName + " has a " + knowlage + " experience in " + lang;
		document.getElementById('res').innerHTML = info + ". The living address is " + address;
		processInfo(id, name, lastName, address, lang, knowlage);
	}
}
// remove spaces before and after str
function trim (str){
     return str.replace (/^\s+|\s+$/g, '');
}
// cleaning all field in the form
function cleanForm(){
	document.getElementById('id').value = '';
	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('addr').value = 'unknown';
	document.getElementById('lang').value = 'js';
	document.getElementById('res').innerHTML = '';	
}
function getAllStudent(){
	var studentTable = getStudentsDb();
	var textPrint = '';
	for(i=0; i<studentTable.length; i++){
		var student = studentTable[i];
		var fullName = student[1] + ' ' + student[2];
		textPrint += 'id: ' + student[0] + ', named ' + fullName;
		textPrint += ' has a ' + student[5] + ' experience in ' + student[4];
		textPrint += '. The living address is ' + student[3];
		textPrint += '</br>';
	}
	document.getElementById('res').innerHTML = textPrint;
}
function removeIdFunc() {
	var id = document.getElementById('removeId').value;
	removeIdFromDb(id);
}