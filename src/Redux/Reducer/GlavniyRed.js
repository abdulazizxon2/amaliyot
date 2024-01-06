import { toast } from "react-toastify";
import {
  GlavniyTypes,
  PlusMinusType,
  PlusMinusType2,
} from "../Action/ActionTypes";

let GlavniyData = {
  carddata: [],
  cardBir: [],
  skidka: [],
  bosch: [],
  CardData1: [],
  son: [],
  novosti: [],
  korzinka: [],
};

export default function GlavniyRed(state = GlavniyData, { type, payload }) {
  switch (type) {
    case GlavniyTypes.get:
      let { carddata, cardBir, skidka, bosch, CardData1, son, novosti } =
        payload;
      state = {
        ...state,
        carddata: carddata,
        cardBir: cardBir,
        skidka: skidka,
        bosch: bosch,
        CardData1: CardData1,
        son: son,
        novosti: novosti,
      };
      console.log(state);
      return state;
    case GlavniyTypes.like:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog]?.map((elem) =>
          elem.id === payload.id ? { ...elem, like: !elem.like } : elem
        ),
      };
      if (payload.like === false) {
        toast.success("Yoqdi");
      } else {
        toast.warn("Yoqmadi");
      }
      return state;
    case "card":
      if (
        state.korzinka.filter((param) => +param.id === +payload.id).length === 0
      ) {
        if (state) {
          state = {
            ...state,
            korzinka: [...state.korzinka, payload],
          };
          toast.success("Qo'shildi");
        } else {
          state = {
            korzinka: [...state.korzinka, payload],
          };
        }
      } else {
        toast.error("Bu oldin qo'shilgan");
      }
      return state;
    case GlavniyTypes.delete:
      state = {
        ...state,
        korzinka: state.korzinka.filter((param) => param.id !== payload),
      };
      toast.success("O'chirildi");
      return state;
    case PlusMinusType.plus:
      state = {
        ...state,
        korzinka: state.korzinka.map((elem) =>
          elem.id === payload && elem.count < 10
            ? { ...elem, count: elem.count + 1 }
            : elem
        ),
      };
      return state;
    case PlusMinusType.minus:
      state = {
        ...state,
        korzinka: state.korzinka.map((elem) =>
          elem.id === payload && elem.count > 1
            ? { ...elem, count: elem.count - 1 }
            : elem
        ),
      };
      return state;
    case PlusMinusType2.plus2:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog].map((elem) =>
          elem.id === payload.id && elem.count < 10
            ? { ...elem, count: elem.count + 1 }
            : elem
        ),
      };
      return state;
    case PlusMinusType2.minus2:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog].map((elem) =>
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
