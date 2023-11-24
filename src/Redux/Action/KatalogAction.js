import { KatalogTypes } from "./ActionTypes"
function setingLike(param) {
    return {
        type: KatalogTypes.likes,
        payload: param,
    };
}
export { setingLike }