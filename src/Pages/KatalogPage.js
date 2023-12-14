import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  Categorya,
  Categorya1,
  ColorFilter,
  Openkatalog2,
  Openkatalog3,
  Openkatalog4,
  Openkatalog5,
  setingLike,
  tipTovarBool,
  tipTovarBool1,
} from "../Redux/Action/KatalogAction";
import { korzinkaFunc } from "../Redux/Action/GlavniyAction";
import { Openkatalog } from "../Redux//Action/KatalogAction";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

export default function KatalogPage() {
  const [value, setValue] = useState([3000, 52500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let state = useSelector((state) => state.KatalogRed);
  let {
    katalogdata,
    katalogOpens,
    katalogOpens2,
    tiptavarData,
    katalogOpens3,
    brendData,
    katalogOpens4,
    materialData,
    categorya,
    katalogOpens5,
    colorfilter,
    colorfiltr,
    categorya1,
  } = state;
  let dispatch = useDispatch();
  console.log(
    katalogdata?.filter((elem) => {
      if (elem.color.includes(colorfiltr)) {
        return elem;
      }
    })?.filter((elem) => {
      if (categorya.length > 0) {
        for (let item of categorya) {
          if (elem?.kategorya?.includes(item)) {
            return elem;
          }
        }
      }
    })?.filter((elem) => {
      if (categorya1.length > 0) {
        for (let item of categorya1) {
          if (elem?.brend?.includes(item)) {
            return elem;
          }
        }
      }
    })
  );
  return (
    <div>
      <div className="elektr-instrument">
        <div className="titles">
          <b>Стройоптторг</b>/ <p>О компании</p>
        </div>
        <div className="elektr">
          <h1>Электроинструмент</h1>
          <p>3 457 товаров</p>
        </div>
      </div>
      <div className="katalogs">
        <div className="chap-katalogs">
          <div className="narx">
            <div className="sena-arrow" onClick={() => dispatch(Openkatalog())}>
              <div className="narxP">
                <b>Цена, ₽</b>
              </div>
              <b>{katalogOpens ? <IoIosArrowForward /> : <IoIosArrowDown />}</b>
            </div>
            <div className={katalogOpens ? "no-narxBTN" : "narx-btn"}>
              <div className="narxlar">
                <label htmlFor="ot-narx">от</label>
                <input type="number"  id="ot-narx" value={`${value[0]}`}/>
                <label htmlFor="do-narx">ДО</label>
                <input type="number" id="do-narx" value={`${value[1]}`}/>
              </div>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  max={100000}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
          </div>
          <div className="tip-tovar">
            <div
              className="tip-tavar-arrow"
              onClick={() => dispatch(Openkatalog2())}
            >
              <b>
                <div className="narxP">
                  <b>Тип </b>
                  <b>товара</b>
                </div>
                <b>
                  {katalogOpens2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </b>
              </b>
            </div>
            <div className={katalogOpens2 ? "tavar" : "tavar-no"}>
              {tiptavarData.map((elem, i) => {
                return (
                  <div className="chekc-tavar" key={i}>
                    <input
                      type="checkbox"
                      checked={elem.bool}
                      onChange={() => { }}
                    />
                    <p
                      onClick={() => {
                        dispatch(tipTovarBool(elem));
                        dispatch(Categorya(elem));
                      }}
                    >
                      {elem.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="brend">
            <div
              className="brend-tovar"
              onClick={() => dispatch(Openkatalog3())}
            >
              <b>
                <div className="narxP">
                  <b>Бренд</b>
                </div>
                {katalogOpens3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </b>
            </div>
            <div className={katalogOpens3 ? "tavar" : "tavar-no"}>
              {brendData.map((elem, i) => {
                return (
                  <div className="chekc-tavar" key={i}>
                    <input
                      type="checkbox"
                      checked={elem.bool}
                      onChange={() => { }}
                    />
                    <p
                      onClick={() => {
                        console.log(elem);
                        dispatch(tipTovarBool1(elem));
                        dispatch(Categorya1(elem));
                      }}
                    >
                      {elem.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="materila">
            <div
              className="brend-material"
              onClick={() => dispatch(Openkatalog4())}
            >
              <b>
                <div className="narxP">
                  <b>Материал</b>
                </div>
                {katalogOpens4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </b>
            </div>
            <div className={katalogOpens4 ? "tavar" : "tavar-no"}>
              {materialData.map((elem, i) => {
                return (
                  <div className="chekc-tavar" key={i}>
                    <input
                      type="checkbox"
                      checked={elem.bool}
                      onChange={() => { }}
                    />
                    <p onClick={() => dispatch(tipTovarBool(elem))}>
                      {elem.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="materila">
            <div
              className="brend-color"
              onClick={() => dispatch(Openkatalog5())}
            >
              <b>
                <div className="narxP">
                  <b>Цвет</b>
                </div>
                {katalogOpens5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </b>
            </div>
            <div className={katalogOpens5 ? "tavar" : "tavar-no"}>
              {colorfilter.map((elem, i) => {
                return (
                  <div className="chekc-tavar" key={i}>
                    <div
                      className="rang"
                      style={{ background: elem.translate }}
                    ></div>
                    <p onClick={() => dispatch(ColorFilter(elem.color))}>
                      <b>{elem.color}</b>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="ong-katalogs">
          <div className="cards-katalog">
            {katalogdata
              .filter((elem) => {
                if (elem.color.includes(colorfiltr) && value[0] <= elem.narxi &&
                  value[1] >= elem.narxi) {
                  return elem;
                }
              }).filter((elem) => {
                if (categorya.length > 0) {
                  for (let item of categorya) {
                    if (elem?.kategorya?.includes(item)) {
                      return elem;
                    }
                  }
                } else {
                  return elem
                }
              }).filter((elem) => {
                if (categorya1.length > 0) {
                  for (let item of categorya1) {
                    if (elem?.brend?.includes(item)) {
                      return elem;
                    }
                  }
                } else {
                  return elem
                }
              })
              ?.map((elem) => {
                return (
                  <div className="cardBig" key={elem.id}>
                    <div className="card-Big">
                      <button className="xit">хит</button>
                      <img src={elem.img} alt={elem.nomi} />
                      <div className="cardMiddle">
                        <p>{elem.art}</p>
                        <h1>{elem.nomi}</h1>
                        {elem.skidka ? (
                          <b className="b1">
                            <del>{elem.narxi}₽</del>
                            {elem.skidka
                              ? (
                                elem.narxi -
                                (elem.narxi / 100) * elem.skidka
                              ).toFixed(2)
                              : ""}
                            ₽<b>-{elem.skidka}%</b>
                          </b>
                        ) : (
                          <span>{elem.narxi}₽</span>
                        )}
                        <div className="btn-cards">
                          <div className="btn-cardsx">
                            <button
                              className="kupit"
                              onClick={() => dispatch(korzinkaFunc(elem))}
                            >
                              <PiShoppingCartSimple /> Купить
                            </button>
                          </div>
                          <div className="btn-card">
                            <button onClick={() => dispatch(setingLike(elem))}>
                              {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                            </button>
                            <button>
                              <FiBarChart2 />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="kupit-instrument">
            <h1>Купить электроинструмент</h1>
            <p>
              Здесь вы найдете самый широкий выбор высококачественных
              электроинструментов для любых задач. Независимо от того, являетесь
              ли вы профессиональным мастером или занимаетесь ремонтами и
              строительством в домашних условиях, у нас есть все необходимое,
              чтобы сделать вашу работу эффективной и комфортной.
            </p>
            <p>
              У нас представлены электроинструменты от ведущих мировых
              производителей, гарантирующие надежность, долгий срок службы и
              безупречное качество. В категории "Электроинструмент" вы найдете
              широкий ассортимент:
            </p>
            <ul>
              <li>
                <p>
                  <b>Дрели и Шуруповерты:</b> От мощных перфораторов для бурения
                  бетона до удобных шуруповертов для быстрой и точной забивки и
                  вывинчивания винтов. Все инструменты обладают разными
                  скоростями, настройками и функциями для наилучшего результата.
                </p>
              </li>
              <li>
                <p>
                  <b>Пилы и Фрезеры:</b> Выбор пил и фрезеров позволит вам точно
                  резать и обрабатывать различные материалы, будь то древесина,
                  пластик или металл. Продуманные дизайны и системы пылеудаления
                  обеспечивают чистоту рабочей зоны.
                </p>
              </li>
              <li>
                <p>
                  <b>Лобзики и Торцовочные Пилы:</b> Для максимально точной
                  резки по контурам и наклонам, а также для продольной резки
                  длинных материалов, таких как доски или трубы.
                </p>
              </li>
              <li>
                <p>
                  <b>Шлифовальные машины:</b> От шлифования поверхности перед
                  покраской до полировки, наши инструменты позволят вам добиться
                  гладкой и равномерной отделки.
                </p>
              </li>
              <li>
                <p>
                  <b>Сварочные аппараты:</b> Для профессиональных сварщиков и
                  тех, кто нуждается в точной и надежной сварке различных
                  материалов.
                </p>
              </li>
              <li>
                <p>
                  <b>Измерительные Приборы:</b> Широкий выбор лазерных
                  дальномеров, электронных угломеров и других инструментов для
                  точных измерений и маркировки.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
