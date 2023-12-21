import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function FullPage() {
  const prod = useParams();
  // console.log(prod);
  let { carddata, CardData1 } = useSelector((state) => state.GlavniyRed);
  let { katalogdata } = useSelector((state) => state.KatalogRed);
  let data = [...carddata, ...CardData1, ...katalogdata]
  let card = data.find((elem) => elem.id === +prod.id)
  console.log(card);
  // console.log(data);
  let card2 = [card?.img, card?.img, card?.img, card?.img, card?.img]
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="fullPage">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            {card2?.map((el, index) => {
              return (
                <img src={el} key={index}/>
              )
            })}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
