'use client'
import { AppContext } from "@/app/contexts/app.context";
import { ICountry } from "@/app/interfaces/ICountry";
import Image from "next/legacy/image";
import React, { useContext } from "react";

interface PageProps {
  params:{
    cca2: string
  }
}

export default function Page ({params}: PageProps){

  const {countriesInitialState} = useContext(AppContext);

  const countryDetail = countriesInitialState.filter((country) => 
  country.cca2 === params.cca2)

  return (
    <section>
      {countryDetail.map((c) => (
      <div key={c.population}>
      <Image 
        layout="fill"
        placeholder={'blur'}
        sizes='(max-width: 768px) 100vw' 
        src={c.flags.png}
        blurDataURL={c.flags.png} 
        alt={c.flags.alt} 
      />
        <span>{c.name.common}</span>
      </div>
      ))}
    </section>
  )
}