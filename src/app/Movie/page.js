import Link from 'next/link'
import React from 'react'
import MovieCard from '../Components/MovieCard';
import styles from '@/app/styles/common.module.css'
import { resolve } from 'styled-jsx/css';

const Movie = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '47f0312259msh2669770bdfa8e9ep14fbd8jsn2d1816b858c6',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    },
    timeout:1000000,

  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <div className={styles.movieSection}>
      <div className={styles.container}><h1>netflix movies and shows</h1>
        <div className={styles.card_section}>
          {
            main_data.map((ele) => {
              return <MovieCard key={ele.id} {...ele} />
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Movie