// import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import ArrowRight from '../../../../public/chevron-right.svg';
import Eye from '../../../shared/icons/eye';
import classnames from 'classnames';
import { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import ShowAll from '../../../shared/common/showAll/ShowAll';

const Compilations = () => {
  const { innerWidthWindow } = useSelector(state => state.common);

  const dataTest = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  return (
    <div className={styles.container}>
      <ShowAll title="Подборки" url="/selections" />

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
        // onSwiper={swiper => console.log(swiper)}
      >
        {dataTest.map((r, i) => {
          return (
            <>
              <SwiperSlide>
                <div className={styles.selection}>
                  <div className={styles.selectionBlock}>
                    <div className={styles.selectionImg}>
                      <img src="/horizontalBookCovers/bookCover1.png" alt="" />
                      <div className={styles.selectionImgCount}>
                        <span>65 </span>
                        <span>книг</span>
                      </div>
                    </div>
                    <div className={styles.selectionDate}>
                      <span>20 октября 2021</span>
                      <div className={styles.selectionDateViews}>
                        <span>456</span>
                        <Eye />
                      </div>
                    </div>
                    <div className={styles.selectionDescription}>
                      <h3>Романтическое фэнтези</h3>
                      <p className={styles.textOver}>
                        А также действия представителей оппозиции представлены в
                        исключительно положительном свете. Прежде всего, курс на
                        социально-ориентированный национальный проект
                        способствует повышению. А также действия представителей
                        оппозиции представлены в исключительно
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
        <button className={classnames('prevArrow', styles.positionButton)}>
          <ArrowRight className="arrowNext" />
        </button>
        <button className={classnames('nextArrow', styles.positionButton)}>
          <ArrowRight className="arrowNext" />
        </button>
      </Swiper>
    </div>
  );
};
export default Compilations;
