import { combineReducers } from "redux";
import NavbarRedux from "./NavbarRedux";
import GlavniyRed from "./GlavniyRed";
import DostavkaRed from "./DostavkaRed";
import KapmaniyaRed from "./KampaniyaRed";
const RootRedux = combineReducers({
    NavbarRedux,
    GlavniyRed,
    DostavkaRed,
    KapmaniyaRed
});
export default RootRedux;