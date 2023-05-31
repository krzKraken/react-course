import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrip } from "./components/GitGrip";

export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['category 1']);
    console.log(categories);

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories([newCategory, ...categories]);

    }
    const removeCategory = () => {
        setCategories([...categories.slice(0, -1)]);
    }
    return (
        <>
            {/* Title */}
            <h1>GitExpertApp</h1>
            {/* input */}
            < AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => addCategory(event)}
            />

            {/* List of categories */}
            {categories.map(category => (
                <GitGrip
                    key={category}
                    category={category}
                />
            )
            )}

        </>
    )
}
