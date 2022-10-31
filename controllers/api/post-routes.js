const router = require('express').Router();
const { post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newPost = await post.create({
      ...req.body,
      user_id: req.session.user_id,
      username: req.session.username,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const PostData = await post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/all', async (req, res) => {
  post.findAll().then((postData) => {
    res.json(postData);
  });
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await post.destroy({
      where: { id: req.params.id }
    });
    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;