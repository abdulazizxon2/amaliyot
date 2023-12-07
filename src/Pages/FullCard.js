import React from 'react'
import { useSelector } from 'react-redux';

export default function FullCard() {
    let {carddata} = useSelector((state) => state.GlavniyRed);

  return (
    <div>
      {carddata.map((elem)=>(
       <>
       <h1 key={elem.id}>{elem.nomi}</h1>
       </>
      ))}
    </div>
  )
}
