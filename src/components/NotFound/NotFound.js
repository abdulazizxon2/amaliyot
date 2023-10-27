import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h1 className='naydena'>Страница не найдена</h1>
      <div className="notfound">
        <img src="./glavniy IMG/Group 408.png" alt="img" />
        <p>Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. Попробуйте воспользоваться поиском.</p>
        <div className="btn-gr">
          <button className='oq'>Вернуться назад</button>
          <button className='koks'>На главную</button>
        </div>
      </div>
    </div>
  )
}
