
import { useState } from "react";


export const AddCategory = (setCategories) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const updateCategory = () => {
        setCategories([...categories, inputValue]);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        updateCategory();
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Search gift"
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
}
