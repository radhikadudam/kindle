import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import './single.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Single() {
    const { id } = useParams();
    const [data, setData] = useState()
    // const data = {
    //     id: id,
    //     img: "https://m.media-amazon.com/images/G/01/kfw/landing/img_books2x._CB611756466_.png",
    //     title: "hello",
    //     author: "radhika dudam",
    //     description: "loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae blanditiis sed, facilis eaque natus cum! Facilis unde commodi, obcaecati debitis dolorum, minus magnam labore deserunt porro dolores voluptates sed tenetur.",
    //     price: 520,
    // }

    useEffect(() => {
        const getbook = async () => {
            try {
                const response = await fetch(`https://kindle-production-5bff.up.railway.app/api/book/${id}`);
                if (!response.ok) {
                    console.log(await response.text());
                } else {
                    const datas = await response.json();
                    setData(datas);
                    console.log(datas);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getbook();
    }, [id]); // ✅ id is now listed

    return (
        <div>
            <Navbar />
            <div className='com'>
                <SideNavbar />
                {/* <div className="landing-page">
                    <div className="container">
                        <div className="image-section">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className="info-section">
                            <h1 className="product-title">{data.title}</h1>
                            <h3 className="product-author">By {data.author}</h3>
                            <p className="product-description">{data.description}</p>
                            <div className="price">${data.price}</div>
                            <Link to={`/read/${id}`}><span className='cta-button'>Read Now</span></Link>
                        </div>
                    </div>
                </div> */}
                {data ? (
                    <div className="landing-page">
                        <div className="container">
                            <div className="image-section">
                                <img src={data.image} alt={data.title} />
                            </div>
                            <div className="info-section">
                                <h1 className="product-title">{data.title}</h1>
                                <h3 className="product-author">By {data.author}</h3>
                                <p className="product-description">{data.description}</p>
                                <div className="price">${data.price}</div>
                                <Link to={`/read/${id}`}><span className='cta-button'>Read Now</span></Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p style={{ padding: '2rem' }}>Loading book details...</p>
                )}

            </div>
        </div>

    )
}

export default Single
