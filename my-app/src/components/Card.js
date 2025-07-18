import React, { useEffect, useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Cards = ({ id, title, image, author}) => (

  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <Link to={`/first/${id}`}><h3>{title}</h3></Link>
      <p>{author}</p>
    </div>
  </div>

);

const Card = () => {

  const [allbooks, setAllbooks] = useState([])

  const getdata = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/book/all')

    if (!response.ok) {
      console.log(response.text())
    }
    else {
      const data =await response.json()
      // console.log(data)
      setAllbooks(data)
      // console.log(allbooks)
    }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <div className="card-container">
      {allbooks.map((item, index) => (
        <Cards key={index} {...item} />
      ))}
    </div>
  );
};

export default Card;
