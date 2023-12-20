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
                {[...filterMassiv(carddata), ...filterMassiv(CardData1), ...filterMassiv(katalogdata)].length > 0 ? ([...filterMassiv(carddata), ...filterMassiv(CardData1), ...filterMassiv(katalogdata)].map((elem, index) => {
                    return (
                        <table border={1}>
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
                                <tr key={elem.id}>
                                    <th> {index + 1} </th>
                                    <td> {elem?.nomi} </td>
                                    <td> {elem?.narxi} </td>
                                    <td> {elem?.skidka} </td>
                                    <td> {elem?.like ? "yoqdi" : "yoqmadi"} </td>
                                    <td> {elem?.art} </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })
                ) : (
                    <div className="likePege">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="104" height="91" viewBox="0 0 104 91" fill="none">
                            <path d="M52 23.75C52 23.75 58.1019 2 77.4237 2C92.4746 2 102 14.4697 102 29.2423C102 49.6732 82.1559 63.2017 52 89C21.8443 63.2017 2 49.6732 2 29.2423C2 14.4697 11.5254 2 26.5763 2C45.8983 2 52 23.75 52 23.75Z" stroke="#186FD4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M46.7273 50.899L46.7281 50.898C48.1776 49.2882 50.1434 48.3838 52.1932 48.3838C54.2429 48.3838 56.2088 49.2882 57.6582 50.898L57.6591 50.899M40 40C41.0035 41.0732 42.365 41.6768 43.7841 41.6768C45.2032 41.6768 46.5641 41.0738 47.5677 40.0006M56.8182 40C57.8217 41.0732 59.1832 41.6768 60.6023 41.6768C62.0214 41.6768 63.3823 41.0738 64.3859 40.0006" stroke="#186FD4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> */}
                        <h3>Ваш список желаний пуст</h3>
                        <p>У вас пока нет товаров в корзине.На странице <b>"Каталог"</b> вы найдете много интересных товаров.</p>
                        <button className='vkatalog'>
                            <NavLink to="/katalog">
                                Перейти в каталог
                            </NavLink>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
