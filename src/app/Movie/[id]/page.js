import Image from 'next/image';
import React from 'react'
import styles from '@/app/styles/common.module.css'

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '47f0312259msh2669770bdfa8e9ep14fbd8jsn2d1816b858c6',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    },
    timeout:10000,
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.movie_title}> Netflix\<span>{main_data.type}</span></h3>
        <div className={styles.card_section}>
          <div>
            <Image src={main_data.backgroundImage.url} width={650} height={300} />
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page