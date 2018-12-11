const express = require("express")
const server = express()
const actionRouter = require("./api-actions-projects/actions.js")
const projectRouter = require("./api-actions-projects/projects.js")

const PORT = 4000

server.use(express.json())
server.use("/api/projects", actionRouter)
server.use("/api/actions", projectRouter)

// server.get("/", (req, res) => {
//   res.status(200).json({
//     message: "server is up and running"
//   })
// })

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
