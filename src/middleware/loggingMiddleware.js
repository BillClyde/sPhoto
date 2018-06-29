export default store => next => action => {
  console.log("Middleware triggered", action, store)
  next(action)
}
