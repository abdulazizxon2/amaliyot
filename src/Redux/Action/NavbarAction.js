import { NavbarTypes } from "./ActionTypes";

function Open() {
  return {
    type: NavbarTypes.katalog
  }
}
function Zakazat() {
  return {
    type: NavbarTypes.zakaz
  }
}
function OpensDoor() {
  return {
    type: NavbarTypes.opensdoor
  }
}
export { Open, Zakazat, OpensDoor }