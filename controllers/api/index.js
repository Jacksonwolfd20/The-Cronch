const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const likeRoutes = require('./like-routes.js');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/like', likeRoutes);


module.exports = router;