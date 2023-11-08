import { combineReducers } from "redux";
import NavbarRedux from "./NavbarRedux";
import GlavniyRed from "./GlavniyRed";
const RootRedux = combineReducers({
    NavbarRedux,
    GlavniyRed
});
export default RootRedux;