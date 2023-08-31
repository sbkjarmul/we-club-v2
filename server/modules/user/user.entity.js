class UserEntity {
  constructor(id, name, email, password, token) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.token = token;
  }
}

class RegisterUserDTO {
  constructor(id, token) {
    this.id = id;
    this.token = token;
  }
}

class LoginUserDTO {
  constructor(id, name, email, token) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.token = token;
  }
}

module.exports = {
  UserEntity,
};
