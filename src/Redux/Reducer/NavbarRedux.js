import { Fulltypes, NavbarTypes } from "../Action/ActionTypes";
let navbarData = {
  katalogOpen: false,
  zakazOpen: false,
  oppenDoor: false,
  kupitDoor:false
}

export default function NavbarRedux(state = navbarData, { type, payload }) {
  switch (type) {
    case NavbarTypes.katalog:
      state = { ...state, katalogOpen: !state.katalogOpen }
      return state;
    case NavbarTypes.zakaz:
      state = { ...state, zakazOpen: !state.zakazOpen }
      return state;
    case NavbarTypes.opensdoor:
      state = { ...state, oppenDoor: !state.oppenDoor }
      return state;
      case Fulltypes.kupit:
        state = { ...state, kupitDoor: !state.kupitDoor }
        return state;
    default:
      return state;
  }
}
