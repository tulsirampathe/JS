class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  // to get the value
  get password() {
    return `${this._password}hitesh`;
  }

  // to set the value
  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abcd");

console.log(hitesh.email);
console.log(hitesh.password);
