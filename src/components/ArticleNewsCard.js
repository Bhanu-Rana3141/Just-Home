import React from 'react'
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ArticleNewsCard( {image, place, date, description, read} ) {
    return (
        <>
            <div className='article-news-card-container'>
                <div className='article-news-card-container-img'>
                    <img src={image}></img>
                </div>
                <div className='article-news-card-content'>
                    <div className='place-date-container'>
                        <div>{place} <span><LuDot size={20} /></span> </div>
                        <div>{date}</div>
                    </div>
                    <div className='mt-2 article-news-card-description'>{description}</div>
                    <div className='mt-2 read-more'>{read} <span><FaArrowRightLong /></span></div>
                </div>
            </div>
        </>
    )
}
