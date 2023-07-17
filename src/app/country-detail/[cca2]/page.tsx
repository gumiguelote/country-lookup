'use client'
import { AppContext } from "@/app/contexts/app.context";
import { IAppContext } from "@/app/interfaces/IAppContext";
import { ICountry } from "@/app/interfaces/ICountry";
import Image from "next/legacy/image";
import React, { useContext } from "react";

interface PageProps {
  params:{
    cca2: string
  }
}

export default function Page ({params}: PageProps){

  const {countriesInitial} = useContext<IAppContext>(AppContext);

  const country: ICountry = countriesInitial
                              .filter((country: ICountry) => country.cca2 === params.cca2)
                              .reduce((acc, country) => {acc = country 
                                return acc;
                              }, {} as ICountry);
  return (
    <section>
        <div>
          <Image 
            layout="fill"
            placeholder={'blur'}
            sizes='(max-width: 768px) 100vw' 
            src={country.flags.png}
            blurDataURL={country.flags.png} 
            alt={country.flags.alt} 
          />
            <span>{country.name.common}</span>
          </div>
    </section>
  )
}