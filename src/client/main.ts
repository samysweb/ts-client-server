import bootstrap = require('client/bootstrap/Bootstrap');
function main():string {
	let test = new bootstrap();
	return test.hi('abcd');
}
export = main;