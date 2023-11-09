import { combineReducers } from "redux";
import NavbarRedux from "./NavbarRedux";
import GlavniyRed from "./GlavniyRed";
import DostavkaRed from "./DostavkaRed";
const RootRedux = combineReducers({
    NavbarRedux,
    GlavniyRed,
    DostavkaRed
});
export default RootRedux;