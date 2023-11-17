import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BiLogoTelegram } from "react-icons/bi";
import { Zakazat } from '../../Redux/Action/NavbarAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Footer() {
    let state = useSelector((state) => state.NavbarRedux)
    let dispatch=useDispatch();
    return (
        <div>
            <Outlet />
            <div className="footer">
                <div className="footBir">
                    <div className="chapFbir">
                        <img src="./glavniy IMG/logo 1(2).png" alt="img" />
                        <p>ООО «Стройоптторг» </p>
                    </div>
                    <div className="ongFbir">
                        <div className="Fbir">
                            <p>ИНН: 0901051787</p>
                            <p>КПП 090101001</p>
                        </div>
                        <div className="Fikki">
                            <b>Emeil:</b>
                            <p >info@stroiopttorg.ru</p>
                        </div>
                        <div className="Fuch">
                            <div className="Fuchss">
                                <h4>8 800 444 00 65</h4>
                                <p>Ежедневно, с 8:00 до 18:00</p>
                            </div>
                            <div className="Fuchs">
                                <input type="submit" name="" id="zvanok" value="Заказать звонок" onClick={() => dispatch(Zakazat())}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footIkki">
                    <div className="chapFoot2">
                        <ul>
                            <h2>Информация</h2>
                            <li><NavLink to="/"><b>О компании</b></NavLink></li>
                            <li><NavLink to="/oplata"><b>Оплата</b></NavLink></li>
                            <li><NavLink to="/dostavka"><b>Доставка</b></NavLink></li>
                            <li><NavLink to="/vozvrat"><b>Возврат</b></NavLink></li>
                            <li><NavLink to="/otvizv"><b>Отзывы</b></NavLink></li>
                        </ul>
                        <ul className='uls'>
                            <li><NavLink to="/vapros"><b>Вопрос-ответ</b></NavLink></li>
                            <li><NavLink to="/novosti"><b>Новости</b></NavLink></li>
                            <li><NavLink to="/kontakt"><b>Контакты</b></NavLink></li>
                            <li>Вход \ Регистрация</li>
                            <li>Все акции</li>
                        </ul>
                    </div>
                    <div className="ongFoot2">
                        <ul>
                            <h2>Каталог</h2>
                            <li>Общестроительные материалы</li>
                            <li>Все для сауны и бани</li>
                            <NavLink to="/katalog">
                            <li>Инструмент</li>
                            </NavLink>
                            <li>Отделочные материалы</li>
                            <li>Товары для дома, сада и огорода</li>
                        </ul>
                        <ul>
                            <li>Электротовары</li>
                            <li>Сантехника</li>
                            <li>Столярные изделия</li>
                            <li>Спецодежда и средства индивидуальной пожарной защиты</li>
                        </ul>
                        <ul>
                            <li>Водо-газоснабжение, отопление, вентиляция</li>
                            <li>Метизные, такелажные и скобяные изделия</li>
                        </ul>
                    </div>
                </div>
                <div className="oplataB">
                    <div className="karta">
                        <p>Мы принимаем к оплате:</p>
                        <img src="./glavniy IMG/Group 49.png" alt="img" />
                        <img src="./glavniy IMG/Group 46.png" alt="img" />
                        <img src="./glavniy IMG/Group 47.png" alt="img" />
                        <img src="./glavniy IMG/Group 48.png" alt="img" />
                        <img src="./glavniy IMG/Vector (2).png" alt="img" />
                        <img src="./glavniy IMG/Vector (3).png" alt="img" />
                    </div>
                    <div className="emeils">
                        <b>Подпишитесь на рассылку и будьте в курсе!</b>
                        <input type="text" name="" id="emeil" placeholder='Ваш email' /><BiLogoTelegram className='kaptar' />
                    </div>
                </div>
                <div className="internet">
                    <p>© 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с 40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615</p>
                    <img src="./glavniy IMG/readycode_logo_3 1.png" alt="img" />
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    )
}
