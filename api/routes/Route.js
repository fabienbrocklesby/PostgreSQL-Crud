const postController = require('../controllers/postController');

module.exports = (route) => {
  route.post('/post/insert', postController.insert);
  route.get('/post/get', postController.select);
  route.get('/post/:id', postController.selectById);
  route.patch('/post/:id', postController.update);
  route.delete('/post/:id', postController.delete);
};