import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One punch");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 0) {
        return;
        }

        onNewCategory(inputValue.trim());
        // setCategories((categorias) => [inputValue, ...categorias]);

        setInputValue("");
    };
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
