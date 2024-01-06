import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { Kupit } from '../../Redux/Action/NavbarAction';
export default function ModalOyna2() {
    let state = useSelector((state) => state.NavbarRedux);
    let dispatch=useDispatch();
    let { kupitDoor } = state;
    return (
        <div className={kupitDoor ? "zakazOpen" : "zakazClose"}>
            <button className='close-modals' onClick={() => dispatch(Kupit())}>
                <AiOutlineClose  />
            </button>
            <form className='modal-oyna'>
                <h1>Заказать в 1 клик</h1>
                <label className='labels' htmlFor="ism">Ваше имя *:</label>
                <input type="text" name="" id="ism" placeholder='Как к вам обращаться?'/>
                <label className='labelss' htmlFor="tel">Номер телефона *:</label>
                <input type="tel" name="" id="tel"/>
                <div className="check-modal">
                    <input type="checkbox" name="" id="" />
                    <p>Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</p>
                </div>
                <button className='telqil'>Перезвоните мне</button>
            </form>
        </div>
    )
}
