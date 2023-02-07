import axios from './axios';
import React, {useEffect, useState} from 'react';
import requests from './Requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
        );
        return request;
      }
      fetchData();

    }, []);

console.log(movie);

    function truncate (string, n){
      return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

  return (
    <header className='banner' 
    style={{
        backgroundImage: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`,
        backgroundSize: "cover" , 
        backgroundPosition: "center center",
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
              {truncate (
                `Test DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest Description`, 150)}
            </h1>
        </div> 

        <div className='banner--fadeBottom' />

        
        
    </header>
  )
}

export default Banner