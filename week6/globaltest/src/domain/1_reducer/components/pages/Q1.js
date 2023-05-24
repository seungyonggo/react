import React, { useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";
import {
  useMenuStore,
  ADD_MENU,
  DELETE_MENU,
} from "../../../../store/1_reducer";

const ReducerQ1Page = () => {
  const [ingredients, dispatch] = useMenuStore();

  const onAddIngredients = (e) => {
    e.preventDefault();
    const newIngredient = {
      id: Math.floor(Math.random() * 1000000),
      name: e.target.name.value,
      price: e.target.price.value,
    };
    e.target.name.value = "";
    e.target.price.value = "";
    dispatch({ type: ADD_MENU, payload: newIngredient });
  };

  const onDeleteIngredients = (id) => {
    dispatch({ type: DELETE_MENU, payload: id });
  };

  return (
    <>
      <h2>Problem 1</h2>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Price</th>
          </tr>
        </thead>
        <ReducerQ1List
          ingredients={ingredients}
          onSubmit={onDeleteIngredients}
        />
      </table>
      <Q1Form onSubmit={onAddIngredients} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};

export default ReducerQ1Page;
/*
문제 1)
로직 분리하기
    
      재료 추가 로직 분리하기
      
      1) 재료 추가 로직 작성하기
      setMenuList ([...menuList, newmenuList])
      2) 재료 삭제 로직 작성하기
      setMenuList(filterMenuList)
      const fliterMenuList = menuList.filter((menu) => menu.id !== id)
      
      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
      src/store/1_reducer.js에 구현해보세요
      */

/* 
         문제 1)
         로직 분리하기
       
         재료 추가 로직 분리하기
     
         1) 재료 추가 로직 작성하기
     
         2) 재료 삭제 로직 작성하기
     
         3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
             src/store/1_reducer.js에 구현해보세요
       */

// const [ingredients, setIngredients] = useState([
//   { id: 1, name: "피자 도우", price: 1000 },
//   { id: 2, name: "토마토 소스", price: 500 },
//   { id: 3, name: "치즈", price: 1000 },
//   { id: 4, name: "피망", price: 500 },
//   { id: 5, name: "양파", price: 500 },
// ]);
