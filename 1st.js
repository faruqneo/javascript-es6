"use strict"

class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static counterUsers(){
    console.log('There is 50 users');
  }

  register(){
    console.log(`${this.username} is now register`);
  }
}

// let bob = new User('bob', 'faruq@marmeto.com', '123456');
// bob.register();
class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(`${this.username} is subscribed to ${this.package} package`);
  }
}


let mike = new Member('mike', 'mike@marmeto.com', '123456', 'Standard');
//mike.getPackage();
mike.register();
