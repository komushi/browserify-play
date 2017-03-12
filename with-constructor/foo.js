var num = require('./num.js');
// console.log(num(5));



function foo(count){
  this.count = count;
}

foo.prototype.go = function() {
	return num(this.count);
};

module.exports = foo;