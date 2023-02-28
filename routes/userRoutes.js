const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteSingleUser,
    addFriend,
    deleteFriend
  } = require('../controllers/userController');
  
  router.route('/').get(getUsers).post(createUser);
  
  router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteSingleUser);


  router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

 



module.exports = router;