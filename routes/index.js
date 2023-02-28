const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const userRoutes = require('./userRoutes')
const thoughtsRoutes = require('./thoughtRoutes')

router.use('/api', apiRoutes);
router.use('/user', userRoutes);
router.use('/thoughts', thoughtsRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
