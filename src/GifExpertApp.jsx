import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // setCategories(["valorant", ...categories]);
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
        // currentCategories={categories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* <ol>
        {categories.map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        ))}
      </ol> */}

      {/* <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol> */}
    </>
  );
};
