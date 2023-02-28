const router = require('express').Router();

const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    updateThoughts,
    deleteSingleThoughts,
    createReaction,
    deleteReaction
} = require('../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getSingleThoughts).put(updateThoughts).delete(deleteSingleThoughts);

router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;