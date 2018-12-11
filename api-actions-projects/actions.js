const express = require("express")
const actionModel = require("../data/helpers/actionModel")

const router = express.Router()

router.get("/", (req, res) => {
  actionModel
    .get()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({
        message: "Error receiving the actions"
      })
    })
})

router.get("/:id", (req, res) => {
  actionModel
    .get(req.params.id)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({
        message: "Error receiving individual action"
      })
    })
})

router.post("/", (req, res) => {
  let { project_id, description, notes, completed } = req.body

  let actions = {
    project_id,
    description,
    notes,
    completed
  }
  actionModel
    .insert(actions)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error with posting this action"
      })
    })
})

router.delete("/:id", (req, res) => {
  actionModel
    .get(req.params.id)
    .then(response => {
      res.status(200).json(response)
      actionModel
        .remove(req.params.id)
        .then(res => {
          res.status(200).send("this post was successfully deleted")
        })
        .catch(err => {
          res.status(500).send("there was an error deleting the action")
        })
    })
    .catch(err => {
      res.status(404).send("there was an error locating the action")
    })
})

router.put("/:id", (req, res) => {
  let { project_id, description, notes, completed } = req.body
  let updatedPost = {
    project_id,
    description,
    notes,
    completed
  }
  actionModel
    .update(req.params.id, updatedPost)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(404).send("this action does not exist")
    })
})

module.exports = router
