const { USER_ERRORS } = require("./user.constants");
const UserMapper = require("./user.mapper");

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
      const userEntity = UserMapper.toEntity(createdUser);
      return userEntity;
    } catch (error) {
      throw new Error(USER_ERRORS.CREATE_USER_FAILED);
    }
  }

  async findUser(email) {
    try {
      const user = await this.usersTable.findOne({ email });
      if (!user) return false;
      const userEntity = UserMapper.toEntity(user);
      return userEntity;
    } catch (error) {
      throw new Error(USER_ERRORS.USER_NOT_FOUND);
    }
  }

  async findManyUsers() {
    try {
      const users = await this.usersTable.findMany({}, "-password");
      const usersEntities = users.map((user) => UserMapper.toEntity(user));
      return usersEntities;
    } catch (error) {
      throw new Error(USER_ERRORS.USER_NOT_FOUND);
    }
  }
}

module.exports = UserRepository;
