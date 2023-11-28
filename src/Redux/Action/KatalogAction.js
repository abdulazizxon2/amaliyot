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
export { setingLike,korzinkaFunc }