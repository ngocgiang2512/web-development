module.exports = app => {
  const Users = app.db.models.Users;

  app.get("/users", (req, res) => {
    Users.findAll({})
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message})
      })
  })

  app.get("/users/:id", (req, res) => {
    Users.findById(req.params.id, {
        attribures: ["id", "name", "email"]
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message})
      })
  })

  app.delete("/users/:id", (req, res) => {
    Users.findById({where: {id: req.params.id} })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({msg: error.message})
      })
  })

  app.post("/users", (req, res) => {
    Users.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message})
      })
  })
}
