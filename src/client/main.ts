import bootstrap = require('commons/bootstrap/Bootstrap');
function main():string {
	let test = new bootstrap();
	return test.hi('abcd');
}
export = main;