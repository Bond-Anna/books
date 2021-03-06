import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import classnames from 'classnames';
import books from '../../data/books.json';
import Book from '../../shared/common/book';
import ArrowRight from '../../../public/chevron-right.svg';
import st from './selectionsList.module.scss';

const SelectionsList = ({ audio, flagSwitcher }) => {
  const selections = [
    { id: '0', name: 'Аудиокниги для семейного путешествия', audio: true },
    {
      id: '1',
      name: 'Что читать на карантине? Лучшие книги о любви 2021',
      audio: false,
    },
    { id: '2', name: 'Укрепляем самооценку и веру в себя', audio: false },
    {
      id: '3',
      name: 'Фантастические путешествия, не выходя из дома',
      audio: false,
    },
    {
      id: '4',
      name: 'Книги о реальных преступлениях, которые будут держать вас в напряжении до последней страницы',
      audio: false,
    },
    {
      id: '5',
      name: 'Аудиокниги о фантастических баталиях и альтернативной истории',
      audio: true,
    },
    {
      id: '6',
      name: 'Истории, где души умерших навещают мир живых',
      audio: false,
    },
    {
      id: '7',
      name: 'Фантастические путешествия, не выходя из дома',
      audio: false,
    },
    {
      id: '8',
      name: 'Что читать на карантине? Лучшие книги о любви 2021',
      audio: false,
    },
    { id: '9', name: 'Аудиокниги для семейного путешествия', audio: true },
  ];

  const [btnIndex, setBtnIndex] = useState(null);

  const handleBtnClick = index => {
    setBtnIndex(index);
  };

  return (
    <div
      className={classnames(st.selectionsSwiper, {
        [st.selectionsSwiperFalse]: flagSwitcher,
      })}
    >
      {selections.map((sel, index) => (
        <div key={sel.name + 1} className={st.selSlider}>
          <div className={st.selSliderHead}>
            <Link href={`/selections/${sel.id}`}>
              <a>
                <h2 className={st.selSliderHeadTitle}>{sel.name}</h2>
              </a>
            </Link>

            <button
              className={classnames(st.selSliderHeadBtn, {
                [st.added]: btnIndex === index,
              })}
              onClick={() => handleBtnClick(index)}
            >
              {btnIndex === index ? (
                <span>Подборка добавлена</span>
              ) : (
                <span>Добавить подборку</span>
              )}
            </button>
          </div>
          <Swiper
            spaceBetween={24}
            modules={[Navigation]}
            navigation={{
              prevEl: '.prevArrow',
              nextEl: '.nextArrow',
            }}
            slidesPerView={5}
          >
            {books.map(book => (
              <SwiperSlide key={book.id}>
                <Book
                  classNames={st.slide}
                  book={book}
                  similar={true}
                  audio={sel.audio}
                />
              </SwiperSlide>
            ))}
            <button
              className={classnames('prevArrow', {
                [st.btn]: !sel.audio,
                [st.btnAudio]: sel.audio,
              })}
            >
              <ArrowRight className="arrowNext" />
            </button>
            <button
              className={classnames('nextArrow', {
                [st.btn]: !sel.audio,
                [st.btnAudio]: sel.audio,
              })}
            >
              <ArrowRight className="arrowNext" />
            </button>
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default SelectionsList;
