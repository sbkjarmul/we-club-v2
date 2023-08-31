const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { USER_ERRORS } = require("./user.constants");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const checkPassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(user) {
    const { name, email, password } = user;

    try {
      let isUserRegistered = await this.userRepository.findUser(email);

      if (isUserRegistered) {
        throw new Error(USER_ERRORS.USER_ALREADY_EXISTS);
      }

      if (!name || !email || !password) {
        throw new Error(USER_ERRORS.EMPTY_FIELDS);
      }

      if (!validator.isEmail(email)) {
        throw new Error(USER_ERRORS.INVALID_EMAIL);
      }

      if (!validator.isStrongPassword(password)) {
        throw new Error(USER_ERRORS.INVALID_PASSWORD);
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await this.userRepository.createUser({
        name,
        email,
        password: hashedPassword,
      });

      if (user) {
        return user;
      } else {
        throw new Error(USER_ERRORS.CREATE_USER_FAILED);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async loginUser(user) {
    try {
      const { email, password } = user;

      if (!email || !password) {
        throw new Error(USER_ERRORS.EMPTY_FIELDS);
      }

      const foundUser = await this.userRepository.findUser(email);

      if (!foundUser) {
        throw new Error(USER_ERRORS.USER_NOT_FOUND);
      }

      const isPasswordCorrect = await checkPassword(
        password,
        foundUser.password
      );

      if (!isPasswordCorrect) {
        throw new Error(USER_ERRORS.INVALID_PASSWORD);
      }

      const token = createToken(foundUser._id);

      return {
        ...foundUser,
        token,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllUsers() {
    try {
      const users = await this.userRepository.findManyUsers();

      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUser(userId) {
    try {
      const user = await this.userRepository.findUser(userId);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
