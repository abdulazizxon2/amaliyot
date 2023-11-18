import { GlavniyTypes } from "./ActionTypes"
function like(param) {
    return {
        type: GlavniyTypes.like,
        payload: param,
    };
}
export { like }