const express = require("express")
const server = express()
const router = require("./api-actions-projects/router")

server.use(express.json())
server.use("/router", router)

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
