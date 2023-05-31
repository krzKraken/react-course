import React from 'react'

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yh1IgNWLFPzL9GdWgtdKnH73hng1QYs7&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(
        img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
    console.log(gifs);
    return gifs;

}

export const GitGrip = ({ category }) => {
    const gifs = [1, 2, 3, 4, 5, 6];

    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                gifs.map((gif) => (
                    <p key={gif
                    }>{gif}</p>
                ))
            }
        </>
    )
}
