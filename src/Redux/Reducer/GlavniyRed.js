import { GlavniyTypes, PlusMinusType, PlusMinusType2 } from "../Action/ActionTypes";

let GlavniyData = {
  carddata: [
    {
      id: 1,
      catalog: "carddata",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22.png",
      art: "Артикул: XJ89YHGO",
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: "15",
      soni: 0,
      kategorya: "Инструмент",
      color: "синий",
      brend: "STAYER"
    },
    {
      id: 2,
      catalog: "carddata",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (8).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      skidka: null,
      soni: 0,
      kategorya: "Инструмент",
      color: "серый",
      brend: "HOMEPROFEE"
    },
    {
      id: 3,
      catalog: "carddata",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (5).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      skidka: 10,
      soni: 0,
      kategorya: "Фильтр",
      color: "оранжывый",
      brend: "PECAHTA",
    },
    {
      id: 4,
      catalog: "carddata",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (1).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: null,
      soni: 0,
      kategorya: "Стойка",
      color: "красный",
      brend: "PECAHTA",
    },
    {
      id: 5,
      catalog: "carddata",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (7).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Водно-дисперсионный клей Cob",
      narxi: 15999,
      skidka: 12,
      soni: 0,
      kategorya: "Стойка",
      color: "красный",
      brend: "PECAHTA",
    },
  ],
  cardBir: [
    {
      img: "./glavniy IMG/image 12 (1).png",
      nomi: "Сантехника"
    },
    {
      img: "./glavniy IMG/out (1) 1.png",
      nomi: "Отделочные материалы"
    },
    {
      img: "./glavniy IMG/image 2.png",
      nomi: "Электротовары"
    },
    {
      img: "./glavniy IMG/image 3.png",
      nomi: "Инструменты"
    },
    {
      img: "./glavniy IMG/klipartz 1.png",
      nomi: "Столярные изделия"
    },
    {
      img: "./glavniy IMG/pngegg 1.png",
      nomi: "Общестроительные материалы"
    },
    {
      img: "./glavniy IMG/image 13.png",
      nomi: "Все для сауныи бани"
    },
  ],
  skidka: [
    {
      skidka: 15,
      nomi: "Метизные изделия",
      img: "./glavniy IMG/Rectangle 31.png"
    },
    {
      skidka: 30,
      nomi: "Лакокрасочные материалы",
      img: "./glavniy IMG/Rectangle 31 (1).png"
    },
    {
      skidka: 25,
      nomi: "Напольные покрытия",
      img: "./glavniy IMG/Rectangle 31 (2).png"
    },
    {
      skidka: 30,
      nomi: "Все для отоплления",
      img: "./glavniy IMG/Rectangle 31 (3).png"
    },
  ],
  bosch: [
    {
      img: "./glavniy IMG/image 22.png"
    },
    {
      img: "./glavniy IMG/image 19.png"
    },
    {
      img: "./glavniy IMG/image 18.png"
    },
    {
      img: "./glavniy IMG/image 17.png"
    },
    {
      img: "./glavniy IMG/image 20.png"
    },
    {
      img: "./glavniy IMG/image 21.png"
    },
    {
      img: "./glavniy IMG/image 19.png"
    },
    {
      img: "./glavniy IMG/image 22.png"
    },
    {
      img: "./glavniy IMG/image 23.png"
    },
    {
      img: "./glavniy IMG/image 20.png"
    },
  ],
  CardData1: [

    {
      id: 6,
      catalog: "CardData1",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (2).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Перфоратор универсальный Wander X645-46 GF 1450W",
      narxi: 15999,
      skidka: 15,
      getting: false,
      rasp: false,
      kategorya: "Инструмент",
      color: "синий",
      brend: "STAYER"
    },
    {
      id: 7,
      catalog: "CardData1",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (3).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Смеситель Faris G-120 для раковины",
      narxi: 1789,
      getting: true,
      rasp: false,
      kategorya: "Инструмент",
      color: "серый",
      brend: "HOMEPROFEE"
    },
    {
      id: 8,
      catalog: "CardData1",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (4).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Триммерная леска «Спираль-100»",
      narxi: 312,
      getting: false,
      skidka: 10,
      kategorya: "Фильтр",
      color: "оранжывый",
      brend: "PECAHTA",
    },
    {
      id: 9,
      catalog: "CardData1",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (6).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Унитаз подвесной Aragio с двойным сливом",
      narxi: 15999,
      skidka: 12,
      getting: false,
      rasp: true,
      kategorya: "Стойка",
      color: "красный",
      brend: "PECAHTA",
    },
    {
      id: 10,
      catalog: "CardData1",
      count: 1,
      like: false,
      img: "../glavniy IMG/Rectangle 22 (7).png",
      art: "Артикул: XJ89YHGO",
      nomi: "Водно-дисперсионный клей Cob",
      narxi: 15999,
      skidka: 12,
      getting: false,
      rasp: false,
      kategorya: "Стойка",
      color: "синий",
      brend: "PECAHTA",
    },
  ],
  son: [
    {
      raqam: "17 805,3 м²",
      tavsif: "торговых и складских помещений"
    },
    {
      raqam: "50 000+",
      tavsif: "наименований товара"
    },
    {
      raqam: "2 500+",
      tavsif: "постоянных клиентов"
    },
    {
      raqam: "440",
      tavsif: "опытных сотрудников"
    }
  ],
  novosti: [
    {
      img: "./glavniy IMG/Rectangle 13 (4).png",
      tavsif: "Масштабное обновление каталога инструментов",
      instrument: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      sana: "5 Августа 2023"
    },
    {
      img: "./glavniy IMG/Rectangle 13.png",
      tavsif: "Масштабное обновление каталога инструментов",
      instrument: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      sana: "5 Августа 2023"
    },
    {
      img: "./glavniy IMG/Rectangle 13 (1).png",
      tavsif: "Масштабное обновление каталога инструментов",
      instrument: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      sana: "5 Августа 2023"
    },
    {
      img: "./glavniy IMG/Rectangle 13 (2).png",
      tavsif: "Масштабное обновление каталога инструментов",
      instrument: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
      sana: "5 Августа 2023"
    }
  ],
  korzinka: []
}

// let data = [...carddata, ...CardData1, ...korzinka]

export default function GlavniyRed(state = GlavniyData, { type, payload }) {
  switch (type) {
    case GlavniyTypes.like:
      state = {
        ...state,
        [payload.catalog]: state?.[payload.catalog]?.map((elem) =>
          elem.id === payload.id ? { ...elem, like: !elem.like } : elem
        ),
      };
      return state;
    case "card":
      if (state.korzinka.filter(param => +param.id === +payload.id).length === 0) {
        if (state) {
          state = {
            ...state,
            korzinka: [...state.korzinka, payload]
          };
        }
        else {
          state = {
            korzinka: [...state.korzinka, payload]
          }
        }
      } else {
      }
      return state;
    case GlavniyTypes.delete:
      state = {
        ...state,
        korzinka: state.korzinka.filter(param => param.id !== payload)
      }
      return state;
    case PlusMinusType.plus:
      state = {
        ...state,
        korzinka: state.korzinka.map((elem) =>
          elem.id === payload && elem.count < 10 ? { ...elem, count: elem.count + 1 } : elem
        ),
      };
      return state;
    case PlusMinusType.minus:
      state = {
        ...state,
        korzinka: state.korzinka.map((elem) =>
          elem.id === payload && elem.count > 1 ? { ...elem, count: elem.count - 1 } : elem
        ),
      };
      return state;
    case PlusMinusType2.plus2:
  // console.log(payload);
      state = {
        ...state,
        korzinka: state.korzinka.map((elem) =>
          elem.id === payload && elem.count > 1 ? { ...elem, count: elem.count + 1 } : elem
        ),
      }
      return state;
    default:
      return state;
  }
}