// Data Access Tier - logic related to the data access tier

function processInfo(id, name, lastName, address, lang, knowlage) {
	var dbString = stringify(id, name, lastName, address, lang, knowlage);
	localStorage.setItem(id, dbString);
}

function stringify(id, name, lastName, address, lang, knowlage) {
	var nameStr = 'name: ' + name;
	var lastNameStr = 'lastName: ' + lastName;
	var addrStr = 'address: ' + address;
	var langStr = 'lang: ' + lang;
	var knowlageStr = 'knowlage: ' + knowlage;
	var dbStr = '{'+ nameStr + ',' + lastNameStr + ',' + addrStr + ',' + langStr + ',' + knowlageStr + '}';
	return dbStr;	
}
function getStudentsDb(){
	var students = [];	//rows: number of student. cols: number of info params
	for (i = 0; i < localStorage.length; i++) {
		var studentId = localStorage.key(i);
		var studentInfo = localStorage.getItem(studentId);
		var tmpStudent = [];
		tmpStudent[0] = studentId;
		tmpStudent[1] = getName(studentInfo);
		tmpStudent[2] = getLastName(studentInfo);
		tmpStudent[3] = getAddr(studentInfo);
		tmpStudent[4] = getLang(studentInfo);
		tmpStudent[5] = getKnowlage(studentInfo);
		students[i] = tmpStudent;
	}
	return students;
}
function getName(studentInfo) {
	var nameIndex = studentInfo.indexOf('name')+6;
	var endNameIndex = studentInfo.indexOf('lastName')-1;
	return 	studentInfo.substring(nameIndex, endNameIndex);
}
function getLastName(studentInfo) {
	var lastNameIndex = studentInfo.indexOf('lastName')+10;
	var endLastNameIndex = studentInfo.indexOf('address')-1;
	return 	studentInfo.substring(lastNameIndex, endLastNameIndex);
}
function getAddr(studentInfo) {
	var addrIndex = studentInfo.indexOf('address')+9;
	var endAddrIndex = studentInfo.indexOf('lang')-1;
	return 	studentInfo.substring(addrIndex, endAddrIndex);
}
function getLang(studentInfo) {
	var langIndex = studentInfo.indexOf('lang')+6;
	var endLangIndex = studentInfo.indexOf('knowlage')-1;
	return 	studentInfo.substring(langIndex, endLangIndex);
}
function getKnowlage(studentInfo) {
	var knowIndex = studentInfo.indexOf('knowlage')+10;
	var endKnowIndex = studentInfo.indexOf('}');
	return 	studentInfo.substring(knowIndex, endKnowIndex);
}