import { KatalogTypes } from "./ActionTypes"
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
        type: KatalogTypes.katalogs
    }
}
export { setingLike, korzinkaFunc, Openkatalog }