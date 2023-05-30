import { useState } from "react";

export const SearchGift = () => {

    const [inputValue, setInputValue] = useState("");

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }
    return (
        <form onSubmit={(e) => {
            onSubmit(e);
        }}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => onChangeInput(e)}
            />

        </form>
    )


}
