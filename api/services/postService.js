const postModel = require('../models/postModel');
const postValidator = require('../validators/postValidator');

exports.insert = async (data) => {
  postValidator(data, ['title', 'body']);
  const post = await postModel.insert(data);
  return post;
};

exports.select = async () => {
  const posts = await postModel.select();
  return posts;
};

exports.selectById = async (id) => {
  const post = await postModel.selectById(id);
  return post;
};

exports.update = async (id, data) => {
  // postValidator(data, id);
  const post = await postModel.update(id, data);
  return post;
};

exports.delete = async (id) => {
  postValidator({ id }, ['id']);
  const post = await postModel.delete(id);
  return post;
};