// import React, {useState, useEffect} from 'react';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts'
// import { getGifs } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);



    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category]);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    data.map((img) => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
            </div>
        </>
    )
}
