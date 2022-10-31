const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/like', likeRoutes);

module.exports = router;
