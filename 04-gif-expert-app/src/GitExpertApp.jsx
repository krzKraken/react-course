import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { SearchGift } from "./components/SearchGift";
export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['category 1', 'category 2', 'category 3']);
    console.log(categories);

    const addCategory = () => {
        setCategories([...categories, 'AddCategory']);

    }
    const removeCategory = () => {
        setCategories([...categories.slice(0, -1)]);
    }
    return (
        <>
            {/* Title */}
            <h1>GitExpertApp</h1>
            {/* input */}
            < AddCategory setCategories={setCategories} />

            < SearchGift />
            {/* List of categories */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>
                        {category}
                    </li>
                })}
            </ol>

        </>
    )
}
