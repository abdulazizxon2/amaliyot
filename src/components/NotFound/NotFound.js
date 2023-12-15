import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  let orqaga = useNavigate();
  let dispatch = useDispatch();
  return (
    <div>
      <h1 className='naydena'>Страница не найдена</h1>
      <div className="notfound">
        <img src="./glavniy IMG/Group 408.png" alt="img" />
        <p>Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. Попробуйте воспользоваться поиском.</p>
        <div className="btn-gr">
          <button className='oq' onClick={() => dispatch(orqaga(-1))}>Вернуться назад</button>
          <button className='koks'>На главную</button>
        </div>
      </div>
    </div>
  )
}
