import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // No usar un push
    //     // categories.push('Hunter x Hunter)
    //     // Si usar:
    //     // setCategories([...categories, 'Hunter x Hunter']);
    //     setCategories(categories => [...categories, 'Hunter x Hunter']);
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                { 
                    categories.map(category => {
                        return <GifGrid 
                            key={category}
                            category={category}/>
                    })}
            </ol>
        </div>
    )
}
