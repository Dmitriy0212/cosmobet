import React from 'react';
import { useEffect, useState, Children, cloneElement } from 'react'
import './Carousel.css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const Carousel = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handlLeft = () => {
        console.log(1)
    }
    const handlRight = () => {
        console.log(2)
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);
    console.log(screenWidth)
    const [pages, setPages] = useState([])
    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${screenWidth * 0.94}px`,
                        maxWidth: `${screenWidth * 0.94}px`
                    }
                })
            })
        )

    }, [setPages, children, screenWidth])
    return (
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handlLeft} />
            <div className="window">
                <div className="all-pages-container">
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handlRight} />
        </div>
    )
}