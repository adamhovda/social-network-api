const Thought= require('../models/Thought');
const User= require('../models/User');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThoughts(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThoughts(req, res) {
    Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
          )
        })
        .then((user) => {
          !user 
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json({ message: 'Thought sucessfully created!' });
        })
        .catch((err) => res.status(500).json(err));
},

  updateThoughts(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {$set: req.body}, {runValidators: true, new: true} )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },

  deleteSingleThoughts(req, res) {

    Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : User.findOneAndUpdate(
          { videos: req.params.thoughtId },
          { $pull: { videos: req.params.thoughtId } },
          { new: true }
        )
  )
  .then((user) =>
    !user
      ? res
          .status(404)
          .json({ message: 'Thought created but no user with this id!' })
      : res.json({ message: 'Thought successfully deleted!' })
  )
  .catch((err) => res.status(500).json(err));
      },

    createReaction(req, res){
          
      Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reaction: req.body } },
            { new: true, runValidators: true }
      )
    
    .then((thought) =>
    !thought
      ? res.status(404).json({
          message: 'Reaction created, but found no user with that ID',
        })
      : res.json('Created the reaction 🎉')
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
      },

    deleteReaction(req, res){
                
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: {reaction:{ _id: req.params.reactionId } }},
        { new: true, runValidators: true }
  )

.then((thought) =>
!thought
  ? res.status(404).json({
      message: 'Reaction created, but found no user with that ID',
    })
  : res.json('Deleted the reaction 🎉')
)
.catch((err) => {
console.log(err);
res.status(500).json(err);
});

    },



};


