const { USER_ERRORS } = require("./user.constants");

class UserRepository {
  constructor(usersTable) {
    this.usersTable = usersTable;
  }

  async createUser(user) {
    const { name, email, password } = user;
    try {
      const createdUser = await this.usersTable.create({
        name,
        email,
        password,
      });
      return createdUser;
    } catch (error) {
      throw new Error(USER_ERRORS.CREATE_USER_FAILED);
    }
  }

  async findUser(email) {
    try {
      const user = await this.usersTable.findOne({ email });

      return user;
    } catch (error) {
      throw new Error(USER_ERRORS.USER_NOT_FOUND);
    }
  }

  async findManyUsers() {
    try {
      const users = await this.usersTable.findMany({}).select("-password");
      return users;
    } catch (error) {
      throw new Error(USER_ERRORS.USER_NOT_FOUND);
    }
  }
}

module.exports = UserRepository;
