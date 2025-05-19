import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bedImg from '../assets/images/bed.png';
import bathImg from '../assets/images/bath.png';
import sqrtImg from '../assets/images/sqrt.png';

export default function HomeCard({ image, btn, btn2, name, price, duration, address, beds, baths, sqrt }) {
    return (
        <>
            <div className='card-parent-container'>
                <div className='card-image-container'>
                    <Link to=''><img src={image}></img></Link>
                    <button className='btn1'>{btn}</button>
                    {btn2 ? <button className='btn2'>{btn2}</button> : ''}
                </div>

                <div className='card-text-container'>
                    <div className='name-price-container'>
                        <div className='name'>{name}</div>
                        <div className='price'>{price} {duration ? <span className='duration'>{duration}</span> : ''} </div>
                    </div>

                    <div className='location-container'>
                        <div className='location-address'><CiLocationOn className='location-icon' /> <span>{address}</span> </div>
                    </div>

                    <div className='bed-bath-sqrt-container'>
                        <div className='common-bed-bath-sqrt-container '>
                            <div className='bed-bath-sqrt-img'>
                                <img src={bedImg}></img>
                            </div>
                            <div className='bed-bath-sqrt-text'>{beds}</div>
                        </div>
                        <div className='common-bed-bath-sqrt-container'>
                            <div className='bed-bath-sqrt-img'>
                                <img src={bathImg}></img>
                            </div>
                            <div className='bed-bath-sqrt-text'>{baths}</div>
                        </div>
                        <div className='common-bed-bath-sqrt-container'>
                            <div className='bed-bath-sqrt-img'>
                                <img src={sqrtImg}></img>
                            </div>
                            <div className='bed-bath-sqrt-text'>{sqrt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}