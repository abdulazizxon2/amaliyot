import { NavbarTypes } from "../Action/ActionTypes";
let navbarData = {
  katalogOpen: false
}
export default function NavbarRedux(state = navbarData, { type, payload }) {
  switch (type) {
    case NavbarTypes.katalog:
      state = { ...state, katalogOpen: !state.katalogOpen }
      return state;

    default:
      return state;
  }
}
