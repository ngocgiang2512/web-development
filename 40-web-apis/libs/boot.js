module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log(`NTask API - PORT ${app.get("port")}`);
  })
}
