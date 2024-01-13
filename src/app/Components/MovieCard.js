import React from 'react'
import style from '@/app/styles/common.module.css'
import Link from 'next/link';
import Image from 'next/image';

const MovieCard = (ele) => {
    const { id, type, synopsis, title } = ele.jawSummary;
    return (
        <>
            <div className={style.card}>
                <div className={style.card_image}>
                    <Image src={ele.jawSummary.backgroundImage.url} alt={title} width={250} height={200} />
                </div>
                <div className={style.card_data}>
                    <h2>{title}</h2>
                    <p>{synopsis}</p>
                    <Link href={`/Movie/${id}`}> <button>Read More</button></Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard