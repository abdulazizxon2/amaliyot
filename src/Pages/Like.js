import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function Like() {
    let state = useSelector((state) => state.GlavniyRed);
    let { carddata, CardData1 } = state;

    let { katalogdata } = useSelector((state) => state.KatalogRed);
    function filterMassiv(param) {
        return (
            param.filter((p) => p.like)
        )
    }

    return (
        <>
            <div className="likePage">
                <div className="titles">
                    <b>Стройоптторг</b>/ <p>Oплаты</p>
                </div>
                <h1>Избранное</h1>
                {[...filterMassiv(carddata), ...filterMassiv(CardData1), ...filterMassiv(katalogdata)].length > 0 ? (
                    <table border={1} >
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>nomi</th>
                                <th>narxi</th>
                                <th>chegirma</th>
                                <th> yoqtirilgan </th>
                                <th>soni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...filterMassiv(carddata), ...filterMassiv(CardData1), ...filterMassiv(katalogdata)].map((elem, index) => {
                                return (
                                    <tr key={elem.id}>
                                        <th> {index + 1} </th>
                                        <td> {elem?.nomi} </td>
                                        <td> {elem?.narxi} </td>
                                        <td> {elem?.skidka} </td>
                                        <td> {elem?.like ? "yoqdi" : "yoqmadi"} </td>
                                        <td> {elem?.art} </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>

                )
                    : (
                        <div className="likePege">
                            <img src="./glavniy IMG/heart.png" alt="like" />
                            <h3>Ваш список желаний пуст</h3>
                            <p>У вас пока нет товаров в корзине.На странице <b>"Каталог"</b> вы найдете много интересных товаров.</p>
                            <button className='vkatalog'>
                                <NavLink to="/katalog">
                                    Перейти в каталог
                                </NavLink>
                            </button>
                        </div>
                    )}
            </div >
        </>
    )
}
