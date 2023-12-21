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
function Openkatalog5() {
  return {
    type: KatalogTypes.katalogs5,
  };
}
function Openkatalog4() {
  return {
    type: KatalogTypes.katalogs4,
  };
}
function Categorya(param) {
  return {
    type: KatalogTypes.categorya,
    payload:param,
  };
}
function Categorya1(param) {
  return {
    type: KatalogTypes.categorya1,
    payload:param,
  };
}
function Categorya2(param) {
  return {
    type: KatalogTypes.categorya2,
    payload:param,
  };
}
function tipTovarBool(param) {
  return {
    type: KatalogTypes.chekced,
    payload: param,
  };
}
function tipTovarBool1(param) {
  return {
    type: KatalogTypes.chekced,
    payload: param,
  };
}
function ColorFilter(param) {
  return {
    type: KatalogTypes.colorfiltr,
    payload: param,
  };
}
export {
  setingLike,
  korzinkaFunc,
  Openkatalog,
  Openkatalog2,
  tipTovarBool,
  tipTovarBool1,
  Openkatalog3,
  Openkatalog4,
  Categorya,
  ColorFilter,
  Openkatalog5,
  Categorya1,
  Categorya2
};
