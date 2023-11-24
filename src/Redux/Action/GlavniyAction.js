import { GlavniyTypes } from "./ActionTypes"
function setLike(param) {
    return {
        type: GlavniyTypes.like,
        payload: param,
    };
}
function korzinkaFunc(param) {
    return {
        type: "card",
        payload: param,
    };
}

export { setLike, korzinkaFunc }