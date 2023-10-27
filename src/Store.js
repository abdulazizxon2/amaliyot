import { createStore } from "redux"
import RootRedux from "./Redux/Reducer/RootRed";

const Store = createStore(RootRedux);
export default Store;