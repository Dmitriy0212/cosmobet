import React from 'react';
import { useEffect, useState, Children, cloneElement, useCallback } from 'react'
import './Carousel.css'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const Carousel = ({ children }) => {
    const [offSet, setOffSet] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const windowInnerWidth = useCallback(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);

    useEffect(() => {
        windowInnerWidth()
    }, [windowInnerWidth]);



    const handlLeft = useCallback(() => {
        setOffSet((currentOffSet) => {
            windowInnerWidth()
            const wind = Math.min(currentOffSet / screenWidth)
            if (wind <= 0) {
                currentOffSet = wind * screenWidth
                const newOffSet = (Math.floor(wind) * screenWidth + screenWidth)
                return Math.min(newOffSet, 0)
            }
            if (wind === 0) {
                currentOffSet = wind * screenWidth
                const newOffSet = currentOffSet + screenWidth
                return Math.min(newOffSet, +(screenWidth * 6))
            }

        })
    }, [screenWidth, windowInnerWidth]);


    const handlRight = useCallback(() => {
        setOffSet((currentOffSet) => {
            windowInnerWidth()
            const wind = Math.min(currentOffSet / screenWidth)
            if (wind < 0) {
                currentOffSet = wind * screenWidth
                const newOffSet = (Math.floor(wind) * screenWidth - screenWidth)
                return Math.max(newOffSet, -(screenWidth * 6))
            }
            if (wind === 0) {
                currentOffSet = wind * screenWidth
                const newOffSet = currentOffSet - screenWidth
                return Math.max(newOffSet, -(screenWidth * 6))
            }

        })
    }, [screenWidth, windowInnerWidth]);





    const [pages, setPages] = useState([])
    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${screenWidth}px`,
                        maxWidth: `${screenWidth}px`
                    }
                })
            })
        )

    }, [setPages, children, screenWidth])



    useEffect(() => {
        const timer = setTimeout(() => {
            if (offSet === -(screenWidth * 6)) {
                setOffSet(0)
            }
            handlRight()
        }, 3000);

        return () => {
            clearTimeout(timer);
        }

    }, [handlRight, offSet, screenWidth]);


    return (
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handlLeft} />
            <div className="window">
                <div className="all-pages-container" style={{ transform: `translateX(${offSet}px)` }}>
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handlRight} />
        </div>
    )
}