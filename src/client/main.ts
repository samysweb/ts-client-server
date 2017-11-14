import bootstrap = require('commons/bootstrap/Bootstrap');
function main():void {
	let test = new bootstrap();
	alert(test.hi('Client'));
}
export = main;