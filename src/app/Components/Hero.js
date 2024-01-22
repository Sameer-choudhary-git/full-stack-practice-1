import React from 'react'
import './style/navbar.css';
import Link from 'next/link';

const Hero = async () => {

  var randomDecimal = Math.random();
  var randomNumber = Math.floor(randomDecimal * 50) + 1;

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en'; const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '47f0312259msh2669770bdfa8e9ep14fbd8jsn2d1816b858c6',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    },
    timeout: 1000000,

  };

  const res = await fetch(url, options);
  const data = await res.json();


  const id = data.titles[randomNumber].jawSummary.trackIds.videoId;


  return (
    <div className='thisis'>
      <section className="hero">
        <h1 className='hero_title'>Netflix Surfer</h1>
        
        <Link href={`/Movie/${id}`}>
          <div class="shadow-2xl my-button mx-auto h-16 w-64 bg-blue-600 mt-44 flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
            <p class="text-center text-white font-semibold my-auto z-10"><button >Read More</button></p>
          </div>
        </Link>

      </section>
    </div>
  )
}

export default Hero