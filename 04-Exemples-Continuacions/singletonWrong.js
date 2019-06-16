function Universe() {
	var instance = this;

	this.start_time = 0;
	this.bang = "Big";

	Universe = function () {
		return instance;
	};
}

Universe.prototype.nothing = true;

var uni = new Universe();

Universe.prototype.everything = true;

var uni2 = new Universe();

print(uni === uni2);
print(uni.nothing);
print(uni.everything);
print(uni2.everything);
print(uni2.nothing);
print(uni.bang);
print(uni2.bang);
print(uni.start_time);
print(uni2.start_time);
print(uni.constructor === Universe);


/****************
// adding to the prototype
Universe.prototype.nothing = true;
var uni = new Universe();

// again adding to the prototype
// after the initial object is created
Universe.prototype.everything = true;
var uni2 = new Universe();

// only the original prototype was
// linked to the objects
print(uni.nothing);
print(uni2.nothing);
print(uni.everything);
print(uni2.everything);

// that sounds right:
print(uni.constructor.name); // "Universe"
// but that's odd:
print(uni.constructor === Universe); // false
********************/