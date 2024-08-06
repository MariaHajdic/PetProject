import React, { useState, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import './HomePage.css'

const HomePage = () => {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchImages(page)
    }, [page])

    const fetchImages = async (page) => {
        try {
            const response = await fetch(`http://localhost:5000/api/images?page=${page}&limit=10`)
            const data = await response.json()
            setImages(prevImages => [...prevImages, ...data])
        } catch (err) {
            console.error(err)
        }
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight) {
            setPage(prevPage => prevPage + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {images.map((image, index) => (
                <div className="image" key={index}>
                    <img src={image.url} alt={image.description} />
                </div>
            ))}
        </Masonry>
    )
}

export default HomePage

/*
const images = [
    "/assets/images/2014-04-10_00-00-00.jpeg",
    "/assets/images/2017-10-29_00-29-15.jpeg",
    "/assets/images/2017-10-30_00-12-18.jpeg",
    "/assets/images/2017-11-10_22-34-44.jpeg",
    "/assets/images/2017-12-15_19-20-50.jpeg",
    "/assets/images/2018-02-10_01-20-34.jpeg",
    "/assets/images/2018-03-02_21-11-44.jpeg",
    "/assets/images/2018-03-02_21-11-54.jpeg",
    "/assets/images/2018-03-02_21-12-24.jpeg",
    "/assets/images/2018-05-30_16-57-15.jpeg",
    "/assets/images/2018-06-23_16-02-28.jpeg",
    "/assets/images/2018-06-27_23-26-08.jpeg",
    "/assets/images/2018-08-30_23-52-13.jpeg",
    "/assets/images/2018-11-12_17-48-18.jpeg",
    "/assets/images/2018-11-12_18-25-28.jpeg",
    "/assets/images/2018-11-12_18-45-58.jpeg",
    "/assets/images/322868_1100-732x549.webp",            
    "/assets/images/1639157021786.jpeg",
]

const HomePage = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <div>
            <div className="gallery">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid-column"
                >
                    {images.map((src, index) => (
                        <div className="image" key={index}>
                            <img src={src} alt="placeholder" />
                        </div>
                    ))

                    }
                </Masonry>
            </div>
        </div>
    )

}

export default HomePage
*/
{/*
                <header className="header">
                <div className="left">
                    <span>PetPlatform</span>
                </div>
                <div className="center">
                    <span className="searchBar">Search</span>
                    <span className="button">Donate to S</span>
                    <span className="button">Donate to PetPlatform</span>
                </div>
                <div className="right">
                    <span className="button">About</span>
                    <span className="button">List of S</span>
                    <span className="button">List of A</span>
                    <span className="button">Login / Sign Up</span>
                    <span className="button">Contact Details</span>
                </div>
            </header>



    return (
        <div>
            <h1>Welcome to the Adopt, a Pet Project</h1>
            <div className="control-panel">
                <button
                    className={filter === 'all' ? 'selected' : ''}
                    onClick={() => setFilter('all')}
                >
                    Artworks and listings
                </button>
                <button
                    className={filter === 'artworks' ? 'selected' : ''}
                    onClick={() => setFilter('all')}
                >
                    Artworks only
                </button>
                <button
                    className={filter === 'listings' ? 'selected' : ''}
                    onClick={() => setFilter('all')}
                >
                    Listings only
                </button>
            </div>
            <main className="gallery">
                <div className="image"><img src="/assets/images/2014-04-10_00-00-00.jpeg" alt="cat"/></div>
                <div className="image"><img src="/assets/images/2017-10-29_00-29-15.jpeg" alt="doggo"/></div>
                <div className="image"><img src="/assets/images/2017-10-30_00-12-18.jpeg" alt="1"/></div>
                <div className="image"><img src="/assets/images/2017-11-10_22-34-44.jpeg" alt="2"/></div>
                <div className="image"><img src="/assets/images/2017-12-15_19-20-50.jpeg" alt="3"/></div>
                <div className="image"><img src="/assets/images/2018-02-10_01-20-34.jpeg" alt="4"/></div>
                <div className="image"><img src="/assets/images/2018-03-02_21-11-44.jpeg" alt="cat"/></div>
                <div className="image"><img src="/assets/images/2018-03-02_21-11-54.jpeg" alt="6"/></div>
                <div className="image"><img src="/assets/images/2018-03-02_21-12-24.jpeg" alt="7"/></div>
                <div className="image"><img src="/assets/images/2018-05-30_16-57-15.jpeg" alt="2"/></div>
                <div className="image"><img src="/assets/images/2018-06-23_16-02-28.jpeg" alt="3"/></div>
                <div className="image"><img src="/assets/images/2018-06-27_23-26-08.jpeg" alt="4"/></div>
                <div className="image"><img src="/assets/images/2018-08-30_23-52-13.jpeg" alt="cat"/></div>
                <div className="image"><img src="/assets/images/2018-11-12_17-48-18.jpeg" alt="6"/></div>
                <div className="image"><img src="/assets/images/2018-11-12_18-25-28.jpeg" alt="7"/></div>
                <div className="image"><img src="/assets/images/2018-11-12_18-45-58.jpeg" alt="6"/></div>
                <div className="image"><img src="/assets/images/322868_1100-732x549.webp" alt="7"/></div>                
                <div className="image"><img src="/assets/images/1639157021786.jpeg" alt="6"/></div>
            </main>
        </div>
    )
     */}