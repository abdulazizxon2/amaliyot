import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowDown } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import { BsCreditCard2Front, BsBox2Fill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";


export default function FullPage() {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);


  const prod = useParams();
  // console.log(prod);
  let { carddata, CardData1 } = useSelector((state) => state.GlavniyRed);
  let { katalogdata } = useSelector((state) => state.KatalogRed);
  let data = [...carddata, ...CardData1, ...katalogdata]
  let card = data.find((elem) => elem.id === +prod.id)
  let card2 = [card?.img, card?.img, card?.img, card?.img, card?.img, card?.img, card?.img];
  return (
    <div className="fullPage">
      <div className="tepaFull">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          vertical={true}
        >
          {card2?.map((el, index) => {
            return (
              <figure key={index}>
                <img src={el} />
              </figure>
            )
          })}

        </Slider>
        <button onClick={() => slider2.current.slickNext()}><IoIosArrowDown /></button>
      </div>
      <div className="pastFull">
        <Slider
          asNavFor={nav2}
          ref={slider1}
          arrows={false}
          vertical={true}
        >
          {card2?.map((el, index) => {
            return (
              <figure key={index} >
                <img src={el} />
              </figure>
            )
          })}
        </Slider>
      </div>
      <div className="fullmalumot">
        <div className="pagesFull">
          <p>Тип товара</p>
          <b>{card.kategorya}</b>
        </div>
        <div className="pagesFull">
          <p>Имя</p>
          <b>{card.nomi}</b>
        </div>
        <div className="pagesFull">
          <p>Бренд</p>
          <b>{card.brend}</b>
        </div>
        <div className="pagesFull">
          <p>Цвет</p>
          <b>{card.color}</b>
        </div>
        <b className="bolshe">Больше характеристик</b>
        <div className="tolov-s">
          <div className="t-usuli">
            <BsCreditCard2Front className="kok-icons" />
            <b>Оплата любым удобным способом</b>
          </div>
          <div className="t-usuli">
            <FaRegAddressCard className="kok-icons" />
            <b>Большой выбор товаров в каталоге</b>
          </div>
          <div className="t-usuli">
            <BsBox2Fill className="kok-icons" />
            <b>Осуществляем быструю доставку</b>
          </div>
          <div className="t-usuli">
            <TbDiscount className="kok-icons" />
            <b>Делаем скидки на крупные покупки</b>
          </div>
        </div>
      </div>
    </div>
  );

}
