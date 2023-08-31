const { UserEntity } = require("./user.entity");

class UserMapper {
  static toDto(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toEntity(user) {
    if (!user) return null;

    if (Array.isArray(user)) {
      return user.map(
        (u) =>
          new UserEntity(
            u._id,
            u.name,
            u.email,
            u.password,
            u.createdAt,
            u.updatedAt
          )
      );
    }

    return new UserEntity(
      user._id,
      user.name,
      user.email,
      user.password,
      user.createdAt,
      user.updatedAt
    );
  }
}

module.exports = UserMapper;
