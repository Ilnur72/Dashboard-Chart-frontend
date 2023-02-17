import React from 'react'


import "./card.scss"


const Cards = ({title, img, number}) => {
  return (
    <div className='card-item text-center py-4'>
        <p className='text-white fs-5'>{title}</p>
        <div className='d-flex align-items-center justify-content-around me-5 mt-2 fw-bold'>
            <img src={img} width={64} alt="" />
            <strong className={title == "Qo'ng'iroqlar" ? "text-primary fs-3" : title === "Buyurtmalar soni" ? "order fs-3" : title === "Tashrif buyuruvchilar soni" ? "user fs-3" : title === "sinov" ? "text-warning fs-3" : title === "To'lo'v qilganlar" ? "order fs-3" : title === "Chiqib ketganlar" ? "text-danger fs-3" : ""}>{number}</strong>
        </div>
    </div>
  )
}

export default Cards