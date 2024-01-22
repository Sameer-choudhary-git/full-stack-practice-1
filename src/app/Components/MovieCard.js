import React from 'react'
import style from '@/app/styles/common.module.css'
import Link from 'next/link';
import Image from 'next/image';
import './style/navbar.css';

const MovieCard = (ele) => {
    const { id, type, synopsis, title } = ele.jawSummary;
    const backgroundStyle = {
        backgroundImage: `url(${ele.jawSummary.backgroundImage.url})`,};

    return (
        <>

            <div class="movie_card" id="ave">
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" src={ele.jawSummary.logoImage.url} />
                        <br/>
                        <br/>
                        <br/>
                        <span class="minutes">{type}</span>
                        <br/>
                        
                    </div>
                    <br/>
                    <div class="movie_desc">
                        <p className=' text-gray-800' class="type"> {ele.jawSummary.tags[0] && ele.jawSummary.tags[0].name},
                            {ele.jawSummary.tags[1] && ele.jawSummary.tags[1].name},
                            {ele.jawSummary.tags[2] && ele.jawSummary.tags[2].name}
                        </p>
                        <p class="text">
                            {synopsis}
                        </p>
                        <Link href={`/Movie/${id}`}><button className=' rounded-xl p-1 bg-white text-black font-bold  hover:bg-slate-400' >Read More</button></Link>

                    </div>

                </div>
                <div style={backgroundStyle} class="blur_back "></div>
            </div>





            
        </>
    )
}

export default MovieCard