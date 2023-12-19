import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function FullPage() {
  const prod = useParams();
  console.log(prod);
  let { carddata, CardData1 } = useSelector((state) => state.GlavniyRed);
  let { katalogdata } = useSelector((state) => state.KatalogRed);
  let data = [...carddata, ...CardData1, ...katalogdata]
  let card = data.filter((elem) => elem.id === prod.id)?.[0]
  console.log(card);

  return (
    <div>
      <div key={prod.id} className="fullPage">
        <img src={card.img} alt="" />
      </div>
    </div>
  )
}
