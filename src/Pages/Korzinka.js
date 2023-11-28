import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import {FiBarChart2} from "react-icons/fi";
import {PiShoppingCartSimple} from "react-icons/pi";
import { korzinkaFunc, setLike } from "../Redux/Action/GlavniyAction";
export default function Korzinka() {
  let state = useSelector((state) => state.GlavniyRed);
  let { korzinka } = state;
  let dispatch=useDispatch();

 
  return (
    <div>
       {korzinka.map((elem)=>{
        return(
          <div className="cardBig" >
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
      })}
    </div>
  )
}
