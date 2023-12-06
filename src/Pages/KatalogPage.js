import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  Openkatalog2,
  Openkatalog3,
  setingLike,
  tipTovarBool,
} from "../Redux/Action/KatalogAction";
import { korzinkaFunc } from "../Redux/Action/GlavniyAction";
import { Openkatalog } from "../Redux//Action/KatalogAction";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

export default function KatalogPage() {
  const [value, setValue] = React.useState([20, 37]);

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
  } = state;
  let dispatch = useDispatch();

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
                <b>
                  {katalogOpens ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </b>
              </div>
            </div>
            <div className={katalogOpens ? "no-narxBTN" : "narx-btn"}>
              <div className="narxlar">
                <div className="ot-narx">
                  <p>от</p>
                  <span>
                    <b>1222</b>
                  </span>
                </div>
                <p>до</p>
                <span>
                  <b>52 500</b>
                </span>
              </div>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
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
                  <b>Тип товара</b>
                </div>
                {katalogOpens2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </b>
            </div>
            <div className={katalogOpens2 ? "tavar" : "tavar-no"}>
              {tiptavarData.map((elem, i) => {
                return (
                  <div className="chekc-tavar" key={i}>
                    <input
                      type="checkbox"
                      checked={elem.bool}
                      onChange={() => {}}
                    />
                    <p onClick={() => dispatch(tipTovarBool(elem))}>
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
                      onChange={() => {}}
                    />
                    <p onClick={() => dispatch(tipTovarBool(elem))}>
                      {elem.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="ong-katalogs">
          <div className="cards-katalog">
            {katalogdata.map((elem) => {
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
