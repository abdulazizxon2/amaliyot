import { combineReducers } from "redux";
import NavbarRedux from "./NavbarRedux";
import GlavniyRed from "./GlavniyRed";
import DostavkaRed from "./DostavkaRed";
import KampaniyaRed from "./KampaniyaRed";
import KatalogRed from "./KatalogRed";
const RootRedux = combineReducers({
    NavbarRedux,
    GlavniyRed,
    DostavkaRed,
    KampaniyaRed,
    KatalogRed
});
export default RootRedux;