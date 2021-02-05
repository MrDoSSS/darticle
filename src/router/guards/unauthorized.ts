export const unauthorized: Darticle.Guard = ({ next, store: { user } }) => {
  if (user.state.loggedIn) {
    next({ name: 'home' })
  } else {
    next()
  }
}
