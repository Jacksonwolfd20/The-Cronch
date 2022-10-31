const User = require('./user');
const post = require('./post');
const likes = require('./likes');
  

  likes.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
  likes.belongsTo(post, { foreignKey: "postId", targetKey: "id" });
  post.hasMany(likes, { foreignKey: "postId", targetKey: "id" });
  post.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
  User.hasMany(likes, { foreignKey: "user_id", targetKey: "id" });
  User.hasMany(post, { foreignKey: "user_id", targetKey: "id" });
  // 
  module.exports = { User, post, likes};