import { GlavniyTypes, PlusMinusType } from "./ActionTypes"
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
function handlePlus(param) {
    return {
        type: PlusMinusType.plus,
        payload: param,
    };
}
function handleMinus(param) {
    return {
        type: PlusMinusType.minus,
        payload: param,
    };
}

export { setLike, korzinkaFunc, handlePlus, handleMinus }