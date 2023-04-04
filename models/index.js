const User = require('./User');
const Gallery = require('./post');
const { post } = require('../controlers');


user.hasMany(post, {
  foreignKey: 'user_id',
});

post.belongsTo(Gallery, {
  foreignKey: 'user_id',
});

module.exports = { User, post };