import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function FullPage() {
    let {carddata} = useSelector((state) => state.GlavniyRed);
    const {nomi}=useParams();
  return (
    <div>
      {carddata.filter((elem)=>elem.nomi===nomi).map((elem)=>(
        <div key={elem.id} className="fullPage">
            <h1>{elem.nomi}</h1>
        </div>
      ))}
    </div>
  )
}
