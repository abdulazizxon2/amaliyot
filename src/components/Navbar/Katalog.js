import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowRightSLine } from "react-icons/ri";
import { OpensDoor } from "../../Redux/Action/NavbarAction";
function Katalog() {
  let state = useSelector((state) => state.NavbarRedux);
  let { katalogOpen, oppenDoor } = state;
  let dispatch = useDispatch()
  return (
    <>
      <div className={katalogOpen ? "opensKatalog" : "closeKatalog"} >
        <div className="katalog-title">
          <div className="katalog-bolim">
            <b>Водо-газоснабжение, отопление, вентиляция</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Общестроительные материалы</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Всё для сауны и бани</b>
            <RiArrowRightSLine />
          </div>
          <div className={oppenDoor?"katalogs-bolims":"close-katalog"} onClick={() => dispatch(OpensDoor())}>
            <b>Инструмент</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Отделочные материалы</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Сантехника</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Метизные, такелажные и скобяные изделия</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Спецодежда и средства индивидуальной и пожарной защиты</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Столярные изделия</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolim">
            <b>Товары для дома, сада и огорода</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolimi">
            <b>Электротовары</b>
            <RiArrowRightSLine />
          </div>
        </div>
        <div className={oppenDoor ? "katalog-instrument" : "katalog-olim"}>
          <div className="katalog-bolimim">
            <b>Измерительно-разметочный инструмент</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-boliming">
            <b>Ручной инструмент</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-boliming">
            <b>Сварочное оборудование</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-boliming">
            <b>Строительное оборудование</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-boliming">
            <b>Штукатурно-отделочные инструменты</b>
            <RiArrowRightSLine />
          </div>
          <div className="katalog-bolimlar">
            <b>Электроинструмент</b>
            <RiArrowRightSLine />
          </div>
        </div>
        <div className={oppenDoor?"komplekte-bir":"komplekte-close"}>
          <b>Вибротехника и комплектующие</b>
          <b>Генераторы и комплектующие</b>
          <b>Дрели, шуруповерты и гайковерты</b>
          <b>Краскопульты электрические, компрессоры, гвоздезабиватели</b>
          <b>Миксеры строительные</b>
          <b>Отбойные молотки</b>
          <b>Перфораторы</b>
          <b>Граверы</b>
          <b>Фрезеры</b>
          <b>Шлифовальные машины и многофункциональный инструмент</b>
          <b>Штроборезы и приспособления</b>
          <b>Электролобзики</b>
          <b>Мотопомпы и комплектующие</b>
        </div>
        <div className={oppenDoor?"komplekte-ikki":"komplekte-close"}>
          <b>Мультиметры</b>
          <b>Пилы</b>
          <b>Плиткорез</b>
          <b>Пневмоинструменты, компрессоры и комплектующие</b>
          <b>Пуско-зарядные и зарядные устройства</b>
          <b>Расходные материалы и оснастка для электроинструмента</b>
          <b>Стабилизаторы напряжения</b>
        </div>
      </div>
    </>
  )
} export { Katalog }