import { toast } from "react-toastify";
import { KatalogTypes, PlusMinusType2 } from "../Action/ActionTypes";
let KatalogData = {
  katalogdata: [],
  tiptavarData: [],
  brendData: [],
  materialData: [],
  colorfilter: [],
  korzinka: [],
  categorya: [],
  categorya1: [],
  categorya2: [],
  colorfiltr: "",
};
export default function KatalogRed(state = KatalogData, { type, payload }) {
  switch (type) {
    case KatalogTypes.get1:
      let {katalogdata,tiptavarData,brendData,materialData,colorfilter}=payload;
      state={
        ...state,
        katalogdata:katalogdata,
        tiptavarData:tiptavarData,
        brendData:brendData,
        materialData:materialData,
        colorfilter:colorfilter
      };
      console.log(payload);
      return state;
    case KatalogTypes.katalogs:
      state = { ...state, katalogOpens: !state.katalogOpens };
      return state;
    case KatalogTypes.katalogs2:
      state = { ...state, katalogOpens2: !state.katalogOpens2 };
      return state;
    case KatalogTypes.katalogs3:
      state = { ...state, katalogOpens3: !state.katalogOpens3 };
      return state;
    case KatalogTypes.katalogs4:
      state = { ...state, katalogOpens4: !state.katalogOpens4 };
      return state;
    case KatalogTypes.katalogs5:
      state = { ...state, katalogOpens5: !state.katalogOpens5 };
      return state;
    case KatalogTypes.chekced:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog].map((elem) =>
          elem.title === payload.title ? { ...elem, bool: !elem.bool } : elem
        ),
      };
      return state;
    case KatalogTypes.likes:
      state = {
        ...state,
        katalogdata: state?.katalogdata?.map((elem) =>
          elem.id === payload.id ? { ...elem, like: !elem.like } : elem
        ),
      };
      if (payload.like === false) {
        toast.success("Yoqdi");
      } else {
        toast.warn("Yoqmadi");
      }
      return state;
    case KatalogTypes.categorya:
      // console.log(payload);
      if (
        state.categorya.filter((elem) => elem === payload.title).length === 0
      ) {
        state = {
          ...state,
          categorya: [...state.categorya, payload.title],
        };
      } else {
        state = {
          ...state,
          categorya: state.categorya.filter((elem) => elem !== payload.title),
        };
      }
      return state;
    case KatalogTypes.categorya1:
      if (
        state.categorya1.filter((elem) => elem === payload.title).length === 0
      ) {
        state = {
          ...state,
          categorya1: [...state.categorya1, payload.title],
        };
      } else {
        state = {
          ...state,
          categorya1: state.categorya1.filter((elem) => elem !== payload.title),
        };
      }
      return state;
    case KatalogTypes.categorya2:
      if (
        state.categorya2.filter((elem) => elem === payload.title).length === 0
      ) {
        state = {
          ...state,
          categorya2: [...state.categorya2, payload.title],
        };
      } else {
        state = {
          ...state,
          categorya2: state.categorya2.filter((elem) => elem !== payload.title),
        };
      }
      return state;
    case KatalogTypes.colorfiltr:
      state = { ...state, colorfiltr: payload };
      return state;
    case PlusMinusType2.plus2:
      state = {
        ...state,
        [payload.catalogs]: state?.[payload.catalogs].map((elem) =>
          elem.id === payload.id && elem.count < 10
            ? { ...elem, count: elem.count + 1 }
            : elem
        ),
      };
      return state;
    case PlusMinusType2.minus2:
      state = {
        ...state,
        [payload.catalogs]: state?.[payload.catalogs].map((elem) =>
          elem.id === payload.id && elem.count > 1
            ? { ...elem, count: elem.count - 1 }
            : elem
        ),
      };
      return state;
    default:
      return state;
  }
}
