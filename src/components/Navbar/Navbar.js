import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

 function Navbars() {
  return (<div>
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
    <Outlet />
  </div>);
}
export default memo(Navbars);