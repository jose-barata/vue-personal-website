export const state = () => ({
  showMenu: false
})

export const mutations = {
  updateShowMenu(state, showMenu) {
    state.showMenu = showMenu
  }
}
