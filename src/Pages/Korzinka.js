import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { korzinkaFunc, setLike } from "../Redux/Action/GlavniyAction";
import { TbShoppingCartX } from "react-icons/tb";
export default function Korzinka() {
  let state = useSelector((state) => state.GlavniyRed);
  let { korzinka } = state;
  let dispatch = useDispatch();


  return (
    <div className='kozinkaPage'>
      <div className="tavar-korz">
        <div className="titles">
          <b>Стройоптторг</b>/ <p>Корзина товаров</p>
        </div>
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
                      <div className="btn-cards">
                        <div className="btn-cardsx">
                          <button className='kupit' onClick={() => dispatch(korzinkaFunc(elem))}><PiShoppingCartSimple />  Купить</button>
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
          }
          )
          ) :
          <div className="icon-kozika">
            <TbShoppingCartX />
          </div>
      }
      </div>
    </div>
  )
}
