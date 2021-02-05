export const authorized: Darticle.Guard = ({ next, store: { user } }) => {
  if (user.state.loggedIn) {
    next()
  } else {
    next({
      name: 'login',
      stopPipeline: true
    })
  }
}
