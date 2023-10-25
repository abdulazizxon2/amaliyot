import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2"
import { AiOutlineSearch, AiOutlineGift, AiOutlineHeart } from "react-icons/ai"
import { BsPersonSquare } from "react-icons/bs"
import { FiBarChart2 } from "react-icons/fi"
import { RiShoppingCart2Line } from "react-icons/ri"

function Navbars() {
  return (<div>
    <nav>
      <div className="navbar">
        <div className="chapNav">
          <NavLink to="/"><b>О компании</b></NavLink>
          <NavLink to="/oplata"><b>Оплата</b></NavLink>
          <NavLink to="/dostavka"><b>Доставка</b></NavLink>
          <NavLink to="/vozvrat"><b>Возврат</b></NavLink>
          <NavLink to="/otvizv"><b>Отзывы</b></NavLink>
          <NavLink to="/vapros"><b>Вопрос-ответ</b></NavLink>
          <NavLink to="/novosti"><b>Новости</b></NavLink>
          <NavLink to="/kontakt"><b>Контакты</b></NavLink>
        </div>
        <div className="ongNav">
          <b>Ежедневно, с 8:00 до 18:00</b>
          <h4>8 800 444 00 65</h4>
          <button className="zakaz">Заказать звонок</button>
        </div>
      </div>
      <div className="navbarBig">
        <img src="./glavniy IMG/logo 1.png" alt="" />
        <button id="katalog"><HiBars2 />  Каталог</button>
        <div className="search">
          <input type="text" name="" id="" placeholder="Найти среди 50000 товаров. Например: Дрель Bosch" />
          <button><AiOutlineSearch /></button>
        </div>
        <div className="iconkas">
          <div className="icons">
            <AiOutlineGift />
            <p>Все акции</p>
          </div>
          <div className="icons">
            <BsPersonSquare />
            <p>Войти</p>
          </div>
          <div className="icons">
            <FiBarChart2 />
            <p>Сравнение</p>
          </div>
          <div className="icons">
            <AiOutlineHeart />
            <p>Избранное</p>
          </div>
          <div className="icons">
            <RiShoppingCart2Line />
            <p>Корзина</p>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>);
}
export default memo(Navbars);