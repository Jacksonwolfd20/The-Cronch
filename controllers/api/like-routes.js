const router = require('express').Router();
const { likes } = require('../../models');

router.get('/find/:id', async (req, res) => {
  try {
    const likeData = await likes.findOne({ where: { postid: req.params.id, user_id: req.session.user_id, }, });
    if(!likeData){
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }
    res.status(200).json(likeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/like/:id', async (req, res) => {
  try {
    const likeData = await likes.create({
      postid: req.params.id,
      user_id: req.session.user_id,
      like: true,
    });
      res.status(200).json(likeData);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/dislike/:id', async (req, res) => {
  try {
    const likeData = await likes.create({
      postid: req.params.id,
      user_id: req.session.user_id,
      like: false,
    });
      res.status(200).json(likeData);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/all', async (req, res) => {
  likes.findAll().then((likeData) => {
    res.json(likeData);
  });
});

router.delete('/:id', async (req, res) => {
  try {
    const likeData = await likes.destroy({
      where: { id: req.params.id }
    });
    if (!likeData) {
      res.status(404).json({ message: 'No like with this id!' });
      return;
    }
    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;