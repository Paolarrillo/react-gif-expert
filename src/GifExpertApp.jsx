import {useState} from 'react';
// No se pone el index ya que en una carpeta es lo prinero que se lee (como en una pagina web)
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Moana']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            // setCategories = {setCategories}
            onNewCategory={onAddCategory}
        />
        { categories.map(category =>
            <GifGrid key={category} category={category}/>
        )}
    </>
  )
}
