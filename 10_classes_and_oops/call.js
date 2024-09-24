function Setusername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createuser(username, email, password) {
  Setusername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createuser('chai', 'chai@google.com', "123")

console.log(chai);

