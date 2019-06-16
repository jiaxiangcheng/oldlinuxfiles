function A() {
    this.a = 0;
    this.b = 1;
}

function inherit(p) {
    if (p == null) throw TypeError(); // p no ha de ser null
    if (Object.create) // Object.create (ECMAScript 5)
        return Object.create(p); // potser ja existeix
    // fer-lo servir si és així
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();

    function f() {}; // fer servir una funció “de mentida”
    f.prototype = p; // per assignar-hi el prototipus
    return new f(); // i forçar-ne l’herència
}

A.prototype.retornaA = function() {
    return this.a
}
A.prototype.retornaB = function() {
    return this.b
}
// provem...
var aa = new A();
aa.a = aa.a + 1;
aa.b = aa.b + 1;
print(aa.retornaA());
print(aa.retornaB());

function B() {
    // A.call(this);
    this.a = 100;
    this.c = 101;
}
B.prototype = inherit(A.prototype);
B.prototype.constructor = B;
B.prototype.retornaC = function() {
    return this.c
}
// provem...
var bb = new B();
print(bb.retornaA());
print(bb.retornaB());
print(bb.retornaC());


//  call && apply exemple

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Molly"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe",
  }
print(person.fullName.call(person1)); 


