import { combineReducers } from "redux";
import NavbarRedux from "./NavbarRedux";
import GlavniyRed from "./GlavniyRed";
import DostavkaRed from "./DostavkaRed";
import KampaniyaRed from "./KampaniyaRed";
const RootRedux = combineReducers({
    NavbarRedux,
    GlavniyRed,
    DostavkaRed,
    KampaniyaRed
});
export default RootRedux;