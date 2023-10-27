import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiRightArrowAlt } from "react-icons/bi"
import { BsCreditCard2Front, BsBox2Fill,BsArrowRightCircleFill } from "react-icons/bs"
import { FaRegAddressCard } from "react-icons/fa"
import { TbDiscount } from "react-icons/tb"


export default function Glavniy() {
  let cardBir = [
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
  ]
  let skidka=[
    {
      skidka:15,
      nomi:"Метизные изделия",
      img:"./glavniy IMG/Rectangle 31.png"
    },
    {
      skidka:30,
      nomi:"Лакокрасочные материалы",
      img:"./glavniy IMG/Rectangle 31 (1).png"
    },
    {
      skidka:25,
      nomi:"Напольные покрытия",
      img:"./glavniy IMG/Rectangle 31 (2).png"
    },
    {
      skidka:30,
      nomi:"Все для отоплления",
      img:"./glavniy IMG/Rectangle 31 (3).png"
    },
  ]

  return (<div>
    <div className="swiper-slide-page">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img src="./glavniy IMG/Rectangle 10.png" alt="img" /><div className="drel">
          <h1>Электроинструмент для любых нужд</h1>
          <p>У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.</p>
          <button className="pereyte">перейти к товарам <BiRightArrowAlt /></button>
        </div></SwiperSlide>
        <SwiperSlide><img src="./glavniy IMG/Rectangle 38.png" alt="img" /><div className="drel">
          <h1>Электроинструмент для любых нужд</h1>
          <p>У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.</p>
          <button className="pereyte">перейти к товарам <BiRightArrowAlt /></button>
        </div></SwiperSlide>
      </Swiper>
    </div>
    <div className="tolov">
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
    <div className="katalog1">
      {cardBir.map((elem) => {
        return (
          <div>
            <div className="katalog-card">
              <img src={elem.img} alt={elem.nomi} />
              <b>{elem.nomi}</b>
            </div>
          </div>
        );
      })}
      <div className="katalog-cards">
        <button className='strelka'><BsArrowRightCircleFill /></button>
        <b>Перейти в каталог</b>
      </div>
    </div>
    <div className="skidkas">
      {skidka.map((elem) => {
        return (
          <div>
            <img src={elem.img} alt={elem.nomi} />
            <div className="skidka">
              <h2>{elem.nomi}</h2>
              <b>до-{elem.skidka}%</b>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}
