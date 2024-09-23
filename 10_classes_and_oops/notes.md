# javascript and classes

## OOPS

## Object

- collection of properties and methods

## why use OOPS

## parts of OOPS

Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars

Abtraction
Encapsulation
Inheritance
Polymorphism

## Here's what happes behind the scenes when the new keyword is used:

### A new object is created:

- The new keyword initiates the creation of a new JavaScript object.

### A prototype is linked:

- The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

### The constructor is called:

- The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specifed from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

### The new object is returned:

- After the constructor funtion has called, if it doesnt' return a non-promitive value (object, array, function, etc.), the newly created object is returned.
