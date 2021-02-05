import { readonly, reactive } from "vue"

export const createUserStore = () => {
  const state = reactive({
    loggedIn: false,
    profile: {}
  })

  const login = () => {
    state.loggedIn = true
  }

  return {
    state: readonly(state),
    login
  }
}