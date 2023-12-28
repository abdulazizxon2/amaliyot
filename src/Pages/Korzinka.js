import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";
import { handleDelete, handleMinus, handlePlus, korzinkaFunc } from "../Redux/Action/GlavniyAction";
import { NavLink } from 'react-router-dom';
export default function Korzinka() {
  let state = useSelector((state) => state.GlavniyRed);
  let { korzinka } = state;
  let dispatch = useDispatch();
  let totalPrice = korzinka.reduce(
    (a, b) => parseInt(a + b.count * (b.narxi - (b.narxi / 100) * b.skidka)), 0
  )
  let totalSkidka = totalPrice > 3433 ? parseInt((totalPrice / 100) * 7) : 0;
  console.log(totalPrice);
  return (
    <div className='kozinkaPage'>
      <div className="tavar-korz">
        <div className="titles">
          <b>Стройоптторг</b>/ <p>Корзина товаров</p>
        </div>
        <h1>{totalPrice}</h1>
        <h2>{totalSkidka}</h2>
        <h1>Корзина товаров</h1>
      </div>
      <div className="tovar-no">
        {
          korzinka.length > 0 ? (
            korzinka.map((elem) => {
              // console.log(elem?.like);
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
                          <button onClick={() => dispatch(handleDelete(elem.id))}><RiDeleteBin2Line /></button>
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
              <img src="./glavniy IMG/korzinka.png" alt="korzinka" />
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
