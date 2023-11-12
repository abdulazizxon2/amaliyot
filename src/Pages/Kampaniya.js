import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { BsPersonLinesFill, BsBoxSeam } from "react-icons/bs";
import { TbDiscount } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function Kompaniya() {
  let state = useSelector((state) => state.KampaniyaRed);
  let states = useSelector((state) => state.GlavniyRed);
  let { cardKomp } = state
  let {novosti}=states
  cardKomp = cardKomp.map(
    (elem, index) => ({ ...elem, id: index + 1 })
  )
  return (
    <div className="kompaniya">
      <div className="kompaniya-bir">
        <div className="chap-kompaniya">
          <div className="titles">
            <b>Стройоптторг</b>/ <p>О компании</p>
          </div>
          <h1>О компании</h1>
          <b>«Стройоптторг» - крупнейшая оптово-розничная компания по продаже строительных и отделочных материалов.</b>
          <p>Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.</p>
          <p>Вы всегда можете прийти к нам, пройтись по нашим складским и торговым площадям, оценить, как мы храним, принимаем и продаем товары. Пообщаться с продавцами-консультантами, получить консультацию по товарам у менеджеров.</p>
          <p>Вы также можете всегда пожаловаться нам, спросить совета или вернуть не понравившийся товар. Если же Вам что- то не понравилось, и Вы остались недовольны нашим сервисом - не стесняйтесь сообщать нам об этом. Только так мы сможем понять, что делаем что-то не так. И только так мы сможем стать еще лучше!</p>
          <p>Все товары, представленные на сайте, гарантированно есть в наличии.</p>
          <p>Помимо материалов, мы предлагаем своим клиентам самый большой набор услуг, которые позволяют значительно упростить процесс строительства и ремонта и сделать его легким и комфортным.</p>
        </div>
        <div className="ong-kompaniya">
          <img src="./glavniy IMG/optorozi.png" alt="" />
        </div>
      </div>
      <div className="kopmaniya-ikki">
        <h2>Почему именно мы</h2>
        <div className="udobniy-card">
          <div className="udob-card">
            <div className="chap-udob">
              <CiCreditCard1 />
            </div>
            <div className="ong-udob">
              <h3>Оплата любым удобным способом</h3>
              <p>Выбирайте любой способ оплаты для максимального комфорта при покупках у нас.</p>
            </div>
          </div>
          <div className="udob-card">
            <div className="chap-udob">
              <BsPersonLinesFill />
            </div>
            <div className="ong-udob">
              <h3>Большой выбор товаров в каталоге</h3>
              <p>Наш каталог насыщен разнообразными товарами, чтобы удовлетворить ваши потребности..</p>
            </div>
          </div>
          <div className="udob-card">
            <div className="chap-udob">
              <BsBoxSeam />
            </div>
            <div className="ong-udob">
              <h3>Осуществляем быструю доставку</h3>
              <p>Мы оперативно доставим ваш заказ, чтобы вы могли насладиться покупкой как можно скорее.</p>
            </div>
          </div>
          <div className="udob-card">
            <div className="chap-udob">
              <TbDiscount />
            </div>
            <div className="ong-udob">
              <h3>Осуществляем быструю доставку</h3>
              <p>Наша система скидок работает для вашей выгоды, чем больше купили - больше сэкономили.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="kampanita-uch">
        <h2>История ООО “Стройоптторг”</h2>
        <div className="cards-kampaniya">
          {cardKomp.map((elem) => {
            return (<div className="card-kampaniya" id={elem.id}>
              <b>{elem.raqam}</b>
              <h3>{elem.nom}</h3>
              <ul>
                <li><p>{elem.ul1}</p></li>
                <li><p>{elem.ul2}</p></li>
                <li><p>{elem.ul3}</p></li>
              </ul>
            </div>
            )
          })}
          <div className="card-kampaniya3">
            <h3>Сегодня</h3>
          <div className="card-kamp4">
          <div className="card-kampaniya2">
              <div className="h-lar">
                <h3>17 805,3 м²</h3>
                <p>- торговых и складских помещений</p>
              </div>
              <div className="h-lar">
                <h3>2 500+</h3>
                <p>- постоянных клиентов</p>
              </div>
            </div>
            <div className="card-kampaniya2">
              <div className="h-lar">
                <h3>50 000+</h3>
                <p>- наименований товаров</p>
              </div>
              <div className="h-lar">
                <h3>440</h3>
                <p>- опытных сотрудников</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="last-news2">
        <h1>Последние новости</h1>
        <div className="card-CC">
          {novosti.map((elem) => {
            return (
              <div className="card-C" key={elem.id}>
                <img src={elem.img} alt="img" />
                <b>{elem.tavsif}</b>
                <p>{elem.instrument}</p>
                <p>{elem.sana}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
    );
}