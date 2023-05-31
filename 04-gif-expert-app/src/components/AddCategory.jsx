
import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 0) return;
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
    return (
        <div className="block">
            <form onSubmit={(e) => onSubmit(e)}>

                <h1>Add category</h1>
                <input
                    type="text"
                    placeholder="Search gift"
                    value={inputValue}
                    onChange={(e) => onInputChange(e)}
                />
            </form>
        </div>
    )
}
