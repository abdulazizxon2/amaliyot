import { GlavniyTypes, PlusMinusType, PlusMinusType2 } from "./ActionTypes"
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
function handlePlus2(param) {
    return {
        type: PlusMinusType2.plus2,
        payload: param,
    };
}
function handleMinus(param) {
    return {
        type: PlusMinusType.minus,
        payload: param,
    };
}
function handleMinus2(param) {
    return {
        type: PlusMinusType2.minus2,
        payload: param,
    };
}
function handleDelete(param) {
    return {
        type: GlavniyTypes.delete,
        payload: param,
    };
}

export { setLike, korzinkaFunc, handlePlus, handleMinus, handleDelete,handlePlus2,handleMinus2 }