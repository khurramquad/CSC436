var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const ToDo = require('../models/ToDo')
const mongoose = require('mongoose');

const privateKey = process.env.JWT_PRIVATE_KEY;

router.use(function(req, res, next) {
      console.log(req.header("Authorization"))
      if (req.header("Authorization")) {
          try {
              req.payload = jwt.verify(req.header("Authorization"), privateKey, { algorithms: ['RS256'] })
              console.log(req.payload)
          } catch(error) {
              return res.status(401).json({"error": error.message});
          }
      } else {
          return res.status(401).json({"error": "Unauthorized"});
      }
      next()
  })

router.get('/', async function(req, res, next) {
    const todos = await ToDo.find().where('author').equals(req.payload.id).exec()

    return res.status(200).json({"todos": todos})
});

router.get('/:todoId', async function(req, res, next) {
    console.log(req.payload.id)
    const todoOne = await ToDo.findOne().where('_id').equals(req.payload.id).exec()
    return res.status(200).json({"todo": todoOne})
});

router.post('/update/:todoId', async function(req, res) {
    console.log("Update hit")
    ToDo.findByIdAndUpdate(req.params.todoId,{complete: true, dateCompleted: Date.now()}

    )
    
});


router.delete("/:todoId",  async function (req,res, next)  {
   console.log(req.params.todoId)


   await ToDo.deleteOne({ _id: req.params.todoId })
        .then(todo => res.status(200).json({ message: "Post Deleted"}))
        .catch(error => res.status(400).json({ message: error.message }));




//   await ToDo.deleteOne({_id: req.params.todoId }),(err,data) =>{
//       if (err){
//           res.status(500).json({
//               message:
//               "Something went Wrong",
//           });
//       } else{
//           res.status(200).json({
//               message: "Post Deleted"
//           });
//       }
 // }

});


router.post('/', async function (req, res) {
  const todo = new ToDo({
    "title": req.body.title,
    "description": req.body.description,
    "author": req.payload.id,
    "dateCreated": req.body.dateCreated
    });

    await todo.save().then( savedToDo => {
        return res.status(201).json({
            "id": savedToDo._id,
            "title": savedToDo.title,
            "description": savedToDo.description,
            "author": savedToDo.author,
            "dateCreated": savedToDo.dateCreated,
            "complete": savedToDo.complete,
            "completedOn":savedToDo.completedOn
        })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });

})

module.exports = router;
