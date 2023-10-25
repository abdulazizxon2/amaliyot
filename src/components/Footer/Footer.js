import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Footer() {
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
                            <a href="">info@stroiopttorg.ru</a>
                        </div>
                        <div className="Fuch">
                            <h4>8 800 444 00 65</h4>
                            <p>Ежедневно, с 8:00 до 18:00</p>
                        </div>
                        <div className="Ftort">
                            <input type="submit" name="" id="" value="Заказать звонок" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
