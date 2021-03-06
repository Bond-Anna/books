import Link from 'next/link';
import alphabet from '../../data/alphabet.json';
import css from './alphabet.module.css';
import classNames from "classnames";
import {useRouter} from "next/router";

const Alphabet = () => {
  const router = useRouter()

  return (
    <div className={css.filterContainer}>
      <div className={css.filter}>
        <p className={css.title}>Автор:</p>
        <ul className={css.alphabet}>
          {alphabet.map(({ id, name }) => (
            <li key={id} className={classNames(css.letter, {[css.active]: decodeURI(router.query?.letter) === name})}>
              <Link href={`/books-list/${encodeURI(name)}?type=books`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.filter}>
        <p className={css.title}>Книга:</p>
        <ul className={css.alphabet}>
          {alphabet.map(({ id, name }) => (
            <li key={id} className={classNames(css.letter, {[css.active]: decodeURI(router.query?.letter) === name})}>
              <Link href={`/authors-list/${encodeURI(name)}?type=books`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Alphabet;
