import { KatalogTypes } from "../Action/ActionTypes";
let KatalogData = {
  katalogdata: [
    {
      id: 11,
      img: "./catalogGOODS/perforator.png",
      count: 1,
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: "15",
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "синий",
      brend: "STAYER"
    },
    {
      id: 12,
      img: "./catalogGOODS/bolgarka2.png",
      count: 1,
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "синий",
      brend: "STAYER"
    },
    {
      id: 13,
      img: "./catalogGOODS/circular_pila_bosch.png",
      count: 1,
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "синий",
      brend: "STAYER"
    },
    {
      id: 14,
      img: "./catalogGOODS/shlifovka.png",
      count: 1,
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "синий",
      brend: "STAYER"
    },
    {
      id: 15,
      img: "./catalogGOODS/nabor.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент ",
      color: "чёрный",
      brend: "STAYER"
    },
    {
      id: 16,
      img: "./catalogGOODS/circular_pila_zubr.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Набор",
      color: "чёрный",
      brend: "STAYER"
    },
    {
      id: 17,
      img: "./catalogGOODS/bolgarka2.png",
      count: 1,
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "чёрный",
      brend: "HOMEPROFEE"
    },
    {
      id: 18,
      img: "./catalogGOODS/drell_makita_s_ruchkoy.png",
      count: 1,
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "серый",
      brend: "HOMEPROFEE"
    },
    {
      id: 19,
      img: "./catalogGOODS/betonomeshalka.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "серый",
      brend: "HOMEPROFEE"
    },
    {
      id: 20,
      img: "./catalogGOODS/perforator_bosch.png",
      count: 1,
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Держатель",
      color: "серый",
      brend: "HOMEPROFEE"
    },
    {
      id: 21,
      img: "./catalogGOODS/constr_mixer.png",
      count: 1,
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Адаптер",
      color: "серый",
      brend: "HOMEPROFEE"
    },
    {
      id: 22,
      img: "./catalogGOODS/drell_makita_bez_ruchki.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Фильтр",
      color: "оранжывый",
      brend: "HOMEPROFEE",
    },
    {
      id: 23,
      img: "./catalogGOODS/bolgarka_makita.png",
      count: 1,
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Фильтр",
      color: "оранжывый",
      brend: "PECAHTA",
    },
    {
      id: 24,
      img: "./catalogGOODS/shlifovka_zubr.png",
      count: 1,
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Адаптер",
      color: "оранжывый",
      brend: "PECAHTA",
    },
    {
      id: 25,
      img: "./catalogGOODS/lobzik_makita.png",
      count: 1,
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Адаптер",
      color: "красный",
      brend: "PECAHTA",
    },
    {
      id: 26,
      img: "./catalogGOODS/shlifovka_makita.png",
      count: 1,
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "PECAHTA",
    },
    {
      id: 27,
      img: "./catalogGOODS/stroy_fen_zubr.png",
      count: 1,
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "PECAHTA",
    },
    {
      id: 28,
      img: "./catalogGOODS/graver_zubr.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Фильтр",
      color: "красный",
      brend: "PECAHTA",
    },
    {
      id: 29,
      img: "./catalogGOODS/drell_makita_bez_ruchki_2.png",
      count: 1,
      nomi: " Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Фильтр",
      color: "красный",
      brend: "MAKITA",
    },
    {
      id: 30,
      img: "./catalogGOODS/perforator_bosch_siniy.png",
      count: 1,
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Фильтр",
      color: "серый",
      brend: "MAKITA",
    },
    {
      id: 31,
      img: "./catalogGOODS/drell_PIT.png",
      count: 1,
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Набор",
      color: "серый",
      brend: "MAKITA",
    },
    {
      id: 32,
      img: "./catalogGOODS/perforator_zubr.png",
      count: 1,
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Набор",
      color: "серый",
      brend: "MAKITA",
    },
    {
      id: 33,
      img: "./catalogGOODS/stanok_vixr.png",
      count: 1,
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Держатель",
      color: "чёрный",
      brend: "MAKITA",
    },
    {
      id: 34,
      img: "./catalogGOODS/rubanok_vixr.png",
      count: 1,
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Держатель",
      color: "синий",
      brend: "MAKITA",
    },
    {
      id: 35,
      img: "./catalogGOODS/perforator_PIT.png",
      count: 1,
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "синий",
      brend: "HUNTER",
    },
    {
      id: 36,
      img: "./catalogGOODS/kley_pistolet_stayer.png",
      count: 1,
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "синий",
      brend: "HUNTER",
    },
    {
      id: 37,
      img: "./catalogGOODS/nabor.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Инструмент",
      color: "красный",
      brend: "HUNTER",
    },
    {
      id: 38,
      img: "./catalogGOODS/rubanok_makita.png",
      count: 1,
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "HUNTER",
    },
    {
      id: 39,
      img: "./catalogGOODS/pilesos_zubr.png",
      count: 1,
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "HUNTER",
    },
    {
      id: 40,
      img: "./catalogGOODS/drell_makita_bez_ruchki_2.png",
      count: 1,
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "HUNTER",
    },
    {
      id: 41,
      img: "./catalogGOODS/bolgarka1.png",
      count: 1,
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "HUNTER",
    },
    {
      id: 42,
      img: "./catalogGOODS/nabor.png",
      count: 1,
      nomi: "Набор гравировальных насадок Nozzle-Tok",
      narxi: 15999,
      skidka: 15,
      like: false,
      catalogs: "katalogdata",
      kategorya: "Стойка",
      color: "красный",
      brend: "HUNTER",
    },
  ],
  tiptavarData: [
    {
      title: "Набор",
      bool: false,
      catalog: "tiptavarData",
    },
    {
      title: "Стойка",
      bool: false,
      catalog: "tiptavarData",
    },
    {
      title: "Адаптер",
      bool: false,
      catalog: "tiptavarData",
    },
    {
      title: "Держатель",
      bool: false,
      catalog: "tiptavarData",
    },
    {
      title: "Фильтр",
      bool: false,
      catalog: "tiptavarData",
    },
    {
      title: "Инструмент",
      bool: false,
      catalog: "tiptavarData",
    },
  ],
  brendData: [
    {
      title: "STAYER",
      bool: false,
      catalog: "brendData",
    },
    {
      title: "HOMEPROFEE",
      bool: false,
      catalog: "brendData",
    },
    {
      title: "PECAHTA",
      bool: false,
      catalog: "brendData",
    },
    {
      title: "MAKITA",
      bool: false,
      catalog: "brendData",
    },
    {
      title: "HUNTER",
      bool: false,
      catalog: "brendData",
    },
  ],
  materialData: [
    {
      title: "Латунь",
      bool: false,
      catalog: "materialData",
    },
    {
      title: "Медь",
      bool: false,
      catalog: "materialData",
    },
    {
      title: "Металл",
      bool: false,
      catalog: "materialData",
    },
    {
      title: "Металл, пластик",
      bool: false,
      catalog: "materialData",
    },
    {
      title: "Бумага",
      bool: false,
      catalog: "materialData",
    },
  ],
  colorfilter: [
    {
      color: "синий",
      translate: "blue",
    },
    {
      color: "чёрный",
      translate: "black",
    },
    {
      color: "серый",
      translate: "grey",
    },
    {
      color: "оранжывый",
      translate: "orange",
    },
    {
      color: "красный",
      translate: "red",
    },
  ],
  korzinka: [],
  categorya: [],
  categorya1: [],
  colorfiltr: "",
};
export default function KatalogRed(state = KatalogData, { type, payload }) {
  switch (type) {
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
    case KatalogTypes.colorfiltr:
      state = { ...state, colorfiltr: payload };
      return state;
    default:
      return state;
  }
}
