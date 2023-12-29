import { Fulltypes, NavbarTypes } from "./ActionTypes";

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
function Kupit() {
  return {
    type: Fulltypes.kupit
  }
}
function OpensDoor() {
  return {
    type: NavbarTypes.opensdoor
  }
}
export { Open, Zakazat, OpensDoor,Kupit }