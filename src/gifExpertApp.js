import React, { useState } from 'react';
import AppCategory from './components/AddCategory'
import {GifGrid} from './components/GifGrid'
//iBZYqNBhzsX13FudNz7QBL9Dof4bVa1y
const GifExpertApp = () =>{

  //useState[categories] = ['One Puch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Puch']);
  
  return <div>
      <h2>GifExpertApp</h2>
      <AppCategory setCategories={setCategories}/>
      <hr /> 

      <ol>
        { 
          categories.map((category, idx) => (
            <GifGrid key={category} category = {category} />
          )) 
        }
      </ol>
    </div>
}

export default GifExpertApp;