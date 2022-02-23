import React from 'react';
import BookComponent from '../../../components/Books/category';
import BookService from '../../../http/BookService';
import { useDispatch } from 'react-redux';
import { setBooks, setCategories } from '../../../store/bookSlice';
import CategoriesService from "../../../http/CategoriesService";

const Categories = props => {
  const dispatch = useDispatch();

  dispatch(setCategories(props.categories));
  dispatch(setBooks(props.books));

  return (
    <div>
      <BookComponent />
    </div>
  );
};

export default Categories;

export async function getServerSideProps({ params, query }) {
  const categories = await CategoriesService.getCategories();
  const books = await BookService.getBooks({
    ...query,
    findByCategory: params?.id,
  });

  return {
    props: {
      categories: categories?.data?.data,
      books: books?.data?.data,
    },
  };
}
