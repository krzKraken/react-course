import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['category 1', 'category 2', 'category 3']);
    console.log(categories);

    const addCategory = () => {
        setCategories(['category#', ...categories]);

    }
    return (
        <>
            {/* Title */}
            <h1>GitExpertApp</h1>
            {/* input */}
            <AddCategory />

            <button onClick={addCategory}> AddCategory</button>
            {/* List of categories */}
            <>
                <ol>

                    {categories.map(category => {
                        return <li key={category}>{category}</li>
                    })}
                </ol>
            </>

        </>
    )
}
