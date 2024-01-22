import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/common.module.css';

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '47f0312259msh2669770bdfa8e9ep14fbd8jsn2d1816b858c6',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
    },
    timeout: 10000,
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <section>
        <div className="bg-black text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">{main_data.title}</h1>
              <h2 className="text-gray-700 text-xl md:text-2xl leading-relaxed md:leading-snug mb-2">
                {main_data.genres[0] && main_data.genres[0].name},
                {main_data.genres[1] && main_data.genres[1].name},
                {main_data.genres[2] && main_data.genres[2].name}
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">{main_data.synopsis}</p>

              <h5>{main_data.numSeasonsLabel} - {main_data.episodeCount} </h5>
              <h5>Availability Date: {main_data.availability.availabilityDate}</h5>
              <h5>Release Year: {main_data.releaseYear}</h5>
              <div>
                <h5>{main_data.maturity.rating.value}</h5>
                <h5>{main_data.maturity.rating.maturityDescription}</h5>
              <h5>Type: {main_data.type}</h5>
              </div>
            </div>
            <div className={styles.bgLogoImage} style={{ backgroundImage: `url(${main_data.logoImage.url})` }}></div>
          </div>
        </div>
      </section>

      {/* Your other components or sections here */}
    </>
  );
};

export default page;
