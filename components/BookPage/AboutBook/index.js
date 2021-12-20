import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Stars from '../../shared/common/stars/Stars';
import Dots from '../../../public/horizontalDots.svg';
import BookMark from '../../../public/bookmark.svg';
import OpenBook from '../../../public/book-open.svg';
import Flag from '../../../public/flag.svg';
import Add from '../../../public/plus.svg';
import Basket from '../../../public/trash.svg';

import st from './aboutBook.module.scss';

const AboutBook = ({ audio }) => {
  const dataBook = [
    {
      id: '0',
      img: '/horizontalBookCovers/book.png',
      title: 'Гарри Поттер и философский камень',
      author: 'Джоан Роулинг',
      year: '1997',
      age: '6+',
      raiting: '5',
      about_book:
        'Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Джоан Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. "Гарри Поттер и Философский камень" - история начинается.',
      reader: 'Дмитрий Быков',
      publishing: 'Махаон',
      translater: 'Мария Спивак',
      ganre: 'Фэнтези, зарубежная литература, детские книги',
      copyright_holder: 'Pottermore limited',
      series: 'Гарри Поттер',
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const handleDotsClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      {dataBook.map(book => (
        <div key={book.id} className={st.bookInfo}>
          <div className={st.bookMainInfo}>
            <div className={st.bookCover}>
              <Image
                src={book.img}
                height={audio ? 270 : 406}
                width={270}
                layout="responsive"
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </div>
            <div className={st.aboutBook}>
              <h1 className={st.bookTitle}>{book.title}</h1>
              <p className={st.bookAuthor}>
                <span className={st.bookAuthorName}>{book.author}</span>
                <Link href="#">
                  <a className={st.bookAuthorLink}>(все книги автора)</a>
                </Link>
              </p>
              <div className={st.bookDate}>
                {audio && (
                  <div>
                    <span className={st.audioInfo}>
                      <span>40</span>мин.
                    </span>
                    <span className={st.audioInfo}>
                      <span>42</span> Мбайт
                    </span>
                  </div>
                )}
                <span className={st.bookDateYear}>{book.year}год</span>
                <span>{book.age}</span>
              </div>
              <div className={st.bookRaiting}>
                <p className={st.bookRaitingCount}>Рейтинг {book.raiting}</p>
                <Stars />
              </div>
              <div className={st.buttons}>
                {audio ? (
                  <button className={st.readButton}>Начать слушать</button>
                ) : (
                  <button className={st.readButton}>Читать</button>
                )}
                <div className={st.dropdown}>
                  <span className={st.dotsButton} onClick={handleDotsClick}>
                    <Dots />
                  </span>
                  {openMenu && (
                    <ul className={st.menu}>
                      <li>
                        <BookMark /> <span>Хочу прочитать</span>
                      </li>
                      <li>
                        <OpenBook /> <span>Читаю</span>
                      </li>
                      <li>
                        <Flag />
                        <span>Прочитано</span>
                      </li>
                      <li>
                        <Add />
                        <span>В мои подборки</span>
                      </li>
                      <li>
                        <Basket />
                        <span>Удалить из моих книг</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <ul className={st.navLinks}>
                <li>
                  <Link href="#">
                    <a>О книге</a>
                  </Link>
                </li>
                <li>
                  <Link href="#reviews">
                    <a>Рецензии 37</a>
                  </Link>
                </li>
                <li>
                  {audio ? (
                    <Link href="#quotes">
                      <a>Слушают 129</a>
                    </Link>
                  ) : (
                    <Link href="#quotes">
                      <a>Цитаты 15</a>
                    </Link>
                  )}
                </li>
                <li>
                  <Link href="#similar">
                    <a>Похожие книги</a>
                  </Link>
                </li>
              </ul>
              <p>{book.about_book}</p>
              <div className={st.ditalInfo}>
                {audio ? (
                  <p>
                    Чтец: <span>{book.reader}</span>
                  </p>
                ) : (
                  <>
                    <p>
                      Издательство: <span>{book.publishing}</span>
                    </p>
                    <p>
                      Переводчик: <span>{book.translater}</span>
                    </p>
                  </>
                )}

                <p>
                  Жанр: <span>{book.ganre}</span>
                </p>
                <p>
                  Правообладатель: <span>{book.copyright_holder}</span>
                </p>
                <p>Серия: {book.series}</p>
              </div>
              <div className={st.starsBlock}>
                <p>Оцените книгу</p>
                <Stars activeStart={true} value={0} color={'#4f4f4f'} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBook;