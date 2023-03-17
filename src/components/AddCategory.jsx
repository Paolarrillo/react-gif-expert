import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    /* // Debido a la implementacion del onNewCategory se comento esta linea
    setCategories(categories => [inputValue, ...categories]); */
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar" value={inputValue
      } onChange={onInputChange}/>
    </form>
  )
}
