import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.scss';
import Category from '../../components/category/Category';
import Notes from '../../components/notes/Notes';

import { getCategoryList } from '../../store/notes/actions';
import { getCategoryListSelector } from '../../store/notes/selectors';

const Home = () => {
  const categoryList = useSelector(getCategoryListSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  return (
    <div
      className={`${styles.mainContainer} col-7  p-5 mx-auto row app-container`}
    >
      <Category categoryList={categoryList}></Category>
      <Notes></Notes>
    </div>
  );
};

export default Home;
