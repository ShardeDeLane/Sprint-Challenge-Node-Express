const express = require("express")
const actionModel = require("../data/helpers/projectModel")
const router = express.Router()

router.get("/", (req, res) => {
  projectModel
    .get()
    .then(res => {
      res.status(200).json(res)
    })
    .catch(err => {
      res.status(500).send("error fetching projects")
    })
})

router.get("/:id", (req, res) => {
  projectModel
    .get(req.params.id)
    .then(res => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).send("error fetching single project")
    })
})

router.get("/:id/actions", (req, res) => {
  model
    .getProjectActions(req.params.id)
    .then(res => {
      res.status(200).json(res)
    })
    .catch(err => {
      res.status(500).send("there was an error fetching the actions")
    })
})

router.post("/", (req, res) => {
  let { name, description, completed } = req.body
  let project = {
    name,
    description,
    completed
  }
  actionModel
    .insert(project)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).send("there was an error uploading the project")
    })
})

router.delete("/:id", (req, res) => {
  model
    .get(req.params.id)
    .then(res => {
      res.status(200).json(res)
      model
        .remove(req.params.id)
        .then(res => {
          res.status(200).send("this post has been deleted")
        })
        .catch(err => {
          res.status(500).send("there was an error deleting the project")
        })
    })
    .catch(err => {
      res.status(404).send("there was an error locating the project")
    })
})

router.put("/:id", (req, res) => {
  let { name, description, completed } = req.body
  let changes = {
    name,
    description,
    completed
  }
  actionModel
    .update(req.params.id, changes)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(404).send("there was an error locating the project")
    })
})

module.exports = router
