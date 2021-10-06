import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Category.module.scss';
import { addCategory, getNotesByCategory } from '../../store/notes/actions';
import AddIcon from '../../assets/icons/add.png';
import { getCategoryListWithCountSelector } from '../../store/notes/selectors';

/**
 * Category component performs category related operations like add new category, display list of categories
 * Also display notes based on category, All option to display all available notes
 * @param categoryList
 */
export default function Category({ categoryList }: any) {
  const [categoryInput, setCategoryInput] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const getCategoryListWithCount = useSelector(
    getCategoryListWithCountSelector
  );
  const dispatch = useDispatch();

  const addCategoryValue = () => {
    if (categoryInput) {
      dispatch(addCategory(categoryInput));
      setCategoryInput('');
    }
  };

  const getNoteListByCategory = (category: any) => {
    dispatch(getNotesByCategory(category));
    setActiveCategory(category);
  };

  return (
    <div className="w-25 d-inline-block">
      <div className="category-container">
        <div className="list-group" role="tablist">
          <a
            className={`${
              activeCategory === '' ? 'active' : ''
            } list-group-item list-group-item-action`}
            data-toggle="list"
            role="tab"
            href="#"
            onClick={() => getNoteListByCategory('')}
          >
            All
          </a>
          {getCategoryListWithCount &&
            getCategoryListWithCount.map((category: any, index: any) => {
              return (
                <a
                  key={index}
                  className={`${
                    activeCategory === category.categoryName ? 'active' : ''
                  } list-group-item list-group-item-action`}
                  data-toggle="list"
                  role="tab"
                  href="#"
                  onClick={() => getNoteListByCategory(category.categoryName)}
                >
                  {category.categoryName}
                  <span className="badge badge-primary badge-pill float-right">
                    {category.count}
                  </span>
                </a>
              );
            })}
        </div>
        <div className="pt-3">
          <input
            type="text"
            name="email"
            className="d-inline-block form-control w-75"
            placeholder="Enter new Category"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            onKeyDown={(e) => {
              console.log(e);
              e.key === 'Enter' && addCategoryValue();
            }}
          />
          <span>
            <img
              src={AddIcon}
              className={`ml-3 pb-1 ${styles.image}`}
              onClick={addCategoryValue}
            ></img>
          </span>
        </div>
      </div>
    </div>
  );
}
