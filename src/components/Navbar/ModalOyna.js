import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { Zakazat } from '../../Redux/Action/NavbarAction';
export default function ModalOyna() {
    let state = useSelector((state) => state.NavbarRedux);
    let dispatch=useDispatch();
    let { zakazOpen } = state;
    return (
        <div className={zakazOpen ? "zakazOpen" : "zakazClose"}>
            <button className='close-modals' onClick={() => dispatch(Zakazat())}>
                <AiOutlineClose  />
            </button>
            <form className='modal-oyna'>
                <h1>Заказать обратный звонок</h1>
                <label className='labels' htmlFor="ism">Ваше имя *:</label>
                <input type="text" name="" id="ism" placeholder='Как к вам обращаться?'/>
                <label className='labelss' htmlFor="tel">Номер телефона *:</label>
                <input type="tel" name="" id="tel" value="+7 (     )       -        -" />
                <div className="check-modal">
                    <input type="checkbox" name="" id="" />
                    <p>Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</p>
                </div>
                <button className='telqil'>Перезвоните мне</button>
            </form>
        </div>
    )
}
