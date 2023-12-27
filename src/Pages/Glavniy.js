import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCreditCard2Front, BsBox2Fill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { korzinkaFunc, setLike } from "../Redux/Action/GlavniyAction";
import { TbShoppingCartFilled } from "react-icons/tb";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Glavniy() {
  let state = useSelector((state) => state.GlavniyRed);
  let dispatch = useDispatch();
  let { carddata, cardBir, skidka, bosch, CardData1, son, novosti } = state;
  // const notify = () => toast("Wow so easy!");
  let nom = useNavigate();
  function toNom(obj) {
    nom(`/fullPage/${obj.id}`)
  }


  cardBir = cardBir.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  skidka = skidka.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )

  bosch = bosch.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )

  son = son.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  novosti = novosti.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  return (
    <div>
      <div className="swiper-slide-page">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
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
            <div key={elem.id}>
              <div className="katalog-card" >
                <img src={elem.img} alt={elem.nomi} />
                <b>{elem.nomi}</b>
              </div>
            </div>
          );
        })}
        <NavLink to="/katalog">
          <div className="katalog-cards">
            <button className='strelka'><BsArrowRightCircleFill /></button>
            <b>Перейти в каталог</b>
          </div>
        </NavLink>
      </div>
      <div className="skidkas">
        {skidka.map((elem) => {
          // console.log(elem.id);
          return (
            <div key={elem.id}>
              <img src={elem.img} alt={elem.nomi} />
              <div className="skidka">
                <h2>{elem.nomi}</h2>
                <b>до-{elem.skidka}%</b>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cardN">
        <h1>Хиты продаж</h1>
        <div className="btn-filters">
          <button className='vse-btn'>Все товары</button>
          <button>Инструменты</button>
          <button>Сантехника</button>
          <button>Для дома</button>
          <button>Для сада</button>
        </div>
        <div className="slide-card">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            loop={true}
          >
            {carddata.map((elem) => {
              return (
                <SwiperSlide key={elem.id}>
                  <div className="cardBig" >
                    <div className="card-Big" >
                      <button className='xit'>хит</button>
                      <img src={elem.img} alt={elem.nomi} onClick={() => toNom(elem)} />
                      <div className="cardMiddle">
                        <p>{elem.art}</p>
                        <h1>{elem.nomi}</h1>
                        {elem.skidka ? (<b className='b1'>
                          <del>{elem.narxi}₽</del>
                          {elem.skidka ? (
                            elem.narxi - (elem.narxi / 100) * elem.skidka
                          ).toFixed(2) : ""}₽<b>-{elem.skidka}%</b>
                        </b>) : (<span>{elem.narxi}₽</span>)}
                        <div className="btn-cards">
                          <div className="btn-cardsx">
                            <button className='kupit' onClick={() => dispatch(korzinkaFunc(elem))}>{korzinkaFunc ? <PiShoppingCartSimple /> : <TbShoppingCartFilled />} Купить</button>
                          </div>
                          <div className="btn-card">
                            <button onClick={() => dispatch(setLike(elem))}>
                              {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                            </button>
                            <button onClick={() => dispatch(korzinkaFunc(elem))}><FiBarChart2 /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="kley">
            <div className="skidka-kupit">
              <b>Успейте купить по скидке</b>
              <p>12%</p>
            </div>
            <img src="./glavniy IMG/image 16.png" alt="img" />
            <b>Клей для напольных покрытий Porret</b>
            <div className="narx-skidka">
              <del>15 999 ₽</del><b>12 789 ₽</b>
            </div>
            <button className='korzina'><PiShoppingCartSimple />Добавить в корзину</button>
          </div>
        </div>
      </div>
      <div className="boschX">
        <div className="tepa-bosch">
          <h1>Популярные бренды</h1>
        </div>
        <div className="bosch">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={6}
            spaceBetween={0}
            centeredSlides={true}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            {bosch.map((elem) => {
              // console.log(elem.id);
              return (
                <SwiperSlide key={elem.id}>
                  <div className='bosch'>
                    <img src={elem.img} alt="img" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="deals">
        <div className="tepa-deals">
          <h1>Лучшие предложения</h1>
          <div className="btn-filters">
            <button className='vse-btn'>Все товары</button>
            <button>Инструменты</button>
            <button>Сантехника</button>
            <button>Для дома</button>
            <button>Для сада</button>
          </div>
        </div>

        <div className="cardBigs">
          {CardData1.map((elem) => {
            return (
              <div key={elem.id}>
                <div className="card-Bigs" >
                  {elem.getting ? (
                    <div className="rasp">распродажа</div>
                  ) : elem.rasp ? (
                    <div className="news">новинка</div>
                  ) : (
                    ""
                  )}
                  <img src={elem.img} alt={elem.nomi} onClick={() => toNom(elem)}/>
                  <div className="cardMiddle">
                    <p>{elem.art}</p>
                    <h1>{elem.nomi}</h1>
                    {elem.skidka ? (<b className='b1'>
                      <del>{elem.narxi}₽</del>
                      {(
                        elem.narxi - (elem.narxi / 100) * elem.skidka
                      ).toFixed(2)}₽<b>-{elem.skidka}%</b>
                    </b>) : (<span>{elem.narxi}₽</span>)}
                    <div className="btn-cards">
                      <div className="btn-cardsx">
                        <button className='kupit' onClick={() => dispatch(korzinkaFunc(elem))}>{korzinkaFunc ? <PiShoppingCartSimple /> : <TbShoppingCartFilled />} Купить</button>
                      </div>
                      <div className="btn-card">
                        <button onClick={() => dispatch(setLike(elem))}>
                          {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>
                        <button><FiBarChart2 /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="our-store">
        <div className="chap-Our">
          <h1>О нашем магазине</h1>
          <p className='sel'>Цель и главная задача компании- создать сервис, который не ограничится продажей строительных и отделочных материалов, а будет решать задачи и трудности, с которыми сталкиваются люди во время ремонта.</p>
          <div className="raqamlar" >
            {son.map((elem) => {
              return (
                <div className="raqam" key={elem.id}>
                  <h1>{elem.raqam}</h1>
                  <p>{elem.tavsif}</p>
                </div>
              )
            })}
          </div>
          <p className='mechta'>Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.</p>
          <NavLink to="/kampaniya"><button className='padrobne'>Подробнее о компании <BiRightArrowAlt /></button></NavLink>
        </div>
        <div className="ong-Our">
          <img src="./glavniy IMG/optorozi.png" alt="" />
        </div>
      </div>
      <div className="last-news">
        <h1>Последние новости</h1>
        <div className="card-CC">
          {novosti.map((elem) => {
            return (
              <div className="card-C" key={elem.id}>
                <img src={elem.img} alt="img" />
                <b>{elem.tavsif}</b>
                <p>{elem.instrument}</p>
                <p>{elem.sana}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
