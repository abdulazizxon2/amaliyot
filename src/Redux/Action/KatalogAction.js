import { KatalogTypes } from "./ActionTypes";
function setingLike(param) {
  return {
    type: KatalogTypes.likes,
    payload: param,
  };
}
function korzinkaFunc(param) {
  return {
    type: "card",
    payload: param,
  };
}
function Openkatalog() {
  return {
    type: KatalogTypes.katalogs,
  };
}
function Openkatalog2() {
  return {
    type: KatalogTypes.katalogs2,
  };
}
function Openkatalog3() {
    return {
      type: KatalogTypes.katalogs3,
    };
  }
function tipTovarBool(param) {
  return {
    type: KatalogTypes.chekced,
    payload: param,
  };
}
export { setingLike, korzinkaFunc, Openkatalog, Openkatalog2,tipTovarBool,Openkatalog3 };
