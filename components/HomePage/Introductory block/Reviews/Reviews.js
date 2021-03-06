import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/core';
// import classnames from 'classnames';
import Eye from '../../../shared/icons/eye';
import ArrowRight from '../../../../public/chevron-right.svg';
import Like from '../../../shared/icons/heart';
import Comment from '../../../shared/icons/comment';
import dataReview from '../../../data/reviews.json';
import st from './reviews.module.scss';
import ShowAll from '../../../shared/common/showAll/ShowAll';

const Reviews = () => {
  const { innerWidthWindow } = useSelector(state => state.common);

  return (
    <div className={st.container}>
      <ShowAll title="Рецензии" url="/reviews" text="Показать все" />
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.prevArrow',
          nextEl: '.nextArrow',
        }}
        spaceBetween={24}
        slidesPerView={
          (innerWidthWindow <= 768 && 1) ||
          (innerWidthWindow <= 1024 && 2) ||
          (innerWidthWindow >= 1200 && 3)
        }
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className={st.reviewSwiper}
      >
        {dataReview.map(review => (
          <SwiperSlide className={st.test} key={review.id}>
            <div className={st.reviewer}>
              <Image
                src={review.reiewer_img}
                alt=""
                width="35"
                height="35"
                className={st.reviewerImg}
              />
              <h3 className={st.reviewerName}>{review.reviewer_name}</h3>
            </div>
            <div className={st.reviewsCover}>
              <Image
                src={review.img}
                alt=""
                width={innerWidthWindow <= 500 ? 85 : 86}
                height={innerWidthWindow <= 500 ? 144 : 143}
              />
              <div className={st.bookMainInfo}>
                <h3 className={st.bookTitle}>{review.book_title}</h3>
                <p className={st.bookAuthor}>{review.book_author}</p>
              </div>
            </div>
            <div className={st.reviewInfo}>
              <p className={st.reviewData}>{review.review_data}</p>
              <div className={st.reviewViews}>
                <span className={st.sumReviews}>{review.sum_reviews}</span>
                <Eye />
              </div>
            </div>
            <p className={st.reviewTitle}>{review.review_title}</p>
            <p className={st.reviewText}>{review.review_text}</p>
            <div className={st.reviewStatistic}>
              <span className={st.reviewIcon}>
                <Like />
              </span>
              <span className={st.reviewLike}>{review.likes}</span>
              <span className={st.reviewIcon}>
                <Comment />
              </span>
              <span>{review.comments}</span>
            </div>
          </SwiperSlide>
        ))}
        <button className="prevArrow">
          <ArrowRight className="arrowNext" />
        </button>
        <button className="nextArrow">
          <ArrowRight className="arrowNext" />
        </button>
      </Swiper>
    </div>
  );
};
export default Reviews;
