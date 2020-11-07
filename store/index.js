export const state = () => ({
  darkTheme: false
})

export const mutations = {
  toggleTheme(state) {
    state.darkTheme = !state.darkTheme
  }
}
