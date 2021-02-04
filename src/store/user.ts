import { ref } from "vue"

export const createUserStore = () => {
  const loggedIn = ref(false)
  const profile = ref({})

  return {
    loggedIn,
    profile
  }
}