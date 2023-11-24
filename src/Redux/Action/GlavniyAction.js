import { GlavniyTypes } from "./ActionTypes"
function setLike(param) {
    return {
        type: GlavniyTypes.like,
        payload: param,
    };
}
export { setLike }