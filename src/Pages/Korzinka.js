import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { PiShoppingCartSimple } from "react-icons/pi";
import { handleDelete, handleMinus, handlePlus, korzinkaFunc, setLike } from "../Redux/Action/GlavniyAction";
import { NavLink } from 'react-router-dom';
export default function Korzinka() {
  let state = useSelector((state) => state.GlavniyRed);
  let { korzinka } = state;
  let dispatch = useDispatch();
  let totalPrice = korzinka.reduce(
    (a, b) => parseInt(a + b.count * (b.narxi - (b.narxi / 100) * b.skidka)), 0
  )
  let totalSkidka = totalPrice > 3433 ? parseInt((totalPrice /100) * 7) : 0
  console.log(totalSkidka)
  return (
    <div className='kozinkaPage'>
      <div className="tavar-korz">
        <div className="titles">
          <b>Стройоптторг</b>/ <p>Корзина товаров</p>
        </div>
        <h1>{totalPrice}</h1>
        <h1>Корзина товаров</h1>
      </div>
      <div className="tovar-no">
        {
          korzinka.length > 0 ? (
            korzinka.map((elem) => {
              return (
                <div className="cardBig" key={elem.id}>
                  <div className="card-Big">
                    <button className='xit'>хит</button>
                    <img src={elem.img} alt={elem.nomi} />
                    <div className="cardMiddle">
                      <p>{elem.art}</p>
                      <h1>{elem.nomi}</h1>
                      {elem.skidka ? (<b className='b1'>
                        <del>{elem.narxi}₽</del>
                        {elem.skidka ? (
                          elem.narxi - (elem.narxi / 100) * elem.skidka
                        ).toFixed(2) : ""}₽<b>-{elem.skidka}%</b>
                      </b>) : (<span>{elem.narxi}₽</span>)}
                      <div className="plus-minus">
                        <button className='plus' onClick={() => dispatch(handleMinus(elem.id))}>-</button>
                        <h1 className='count'>{elem.count}</h1>
                        <button className='minus' onClick={() => dispatch(handlePlus(elem.id))}>+</button>
                      </div>
                      <div className="btn-cards">
                        <div className="btn-cardsx">
                          <button className='kupit' onClick={() => dispatch(korzinkaFunc(elem))}><PiShoppingCartSimple />  Купить</button>
                        </div>
                        <div className="btn-card">
                          <button onClick={() => dispatch(setLike(elem))}>
                            {elem.like ? <AiFillHeart /> : <AiOutlineHeart />}
                          </button>
                          <button onClick={() => dispatch(handleDelete(elem.id))}><ImBin /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )
          ) :
            <div className="icon-kozika">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="104" height="77" viewBox="0 0 104 77" fill="none">
                <path d="M2.97266 2H19.623C20.4695 2 21.2243 2.53286 21.5077 3.33047L25.7265 15.2057M25.7265 15.2057L41.0599 58.3664C41.4088 59.3486 42.4535 59.8981 43.4605 59.6292L99.5413 44.6546C100.416 44.4209 101.025 43.6282 101.025 42.7223V17.2057C101.025 16.1012 100.13 15.2057 99.0253 15.2057H25.7265Z" stroke="#186FD4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M55.7273 41.899L55.7281 41.898C57.1776 40.2882 59.1434 39.3838 61.1932 39.3838C63.2429 39.3838 65.2088 40.2882 66.6582 41.898L66.6591 41.899M49 31C50.0035 32.0732 51.365 32.6768 52.7841 32.6768C54.2032 32.6768 55.5641 32.0738 56.5677 31.0006M65.8182 31C66.8217 32.0732 68.1832 32.6768 69.6023 32.6768C71.0214 32.6768 72.3823 32.0738 73.3859 31.0006" stroke="#186FD4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.6928 71C26.6928 73.9455 29.0806 76.3333 32.0261 76.3333C34.9716 76.3333 37.3594 73.9455 37.3594 71C37.3594 68.0545 34.9716 65.6667 32.0261 65.6667C29.0806 65.6667 26.6928 68.0545 26.6928 71ZM28.3945 72H32.0261V70H28.3945V72Z" fill="#186FD4" />
                <path d="M69.9037 71C69.9037 73.9455 72.2915 76.3333 75.237 76.3333C78.1826 76.3333 80.5704 73.9455 80.5704 71C80.5704 68.0545 78.1826 65.6667 75.237 65.6667C72.2915 65.6667 69.9037 68.0545 69.9037 71ZM71.6055 72H75.237V70H71.6055V72Z" fill="#186FD4" />
              </svg> */}
              <h3>В вашей корзине пусто</h3>
              <p>У вас пока нет товаров в корзине.На странице <b>"Каталог"</b> вы найдете много интересных товаров.</p>
              <button className='vkatalog'>
                <NavLink to="/katalog">
                  Перейти в каталог
                </NavLink>
              </button>
            </div>
        }
      </div>
    </div>
  )
}
