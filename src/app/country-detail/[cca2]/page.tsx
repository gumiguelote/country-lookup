"use client";
import React, { useContext } from "react";
import style from "./style.module.css";

import { AppContext } from "@/app/contexts/app.context";
import { IAppContext } from "@/app/interfaces/IAppContext";
import { ICountry } from "@/app/interfaces/ICountry";

import Image from "next/legacy/image";

interface PageProps {
  params: {
    cca2: string;
  };
}

export default function Page({ params }: PageProps) {
  const { countriesInitial } = useContext<IAppContext>(AppContext);

  const country: ICountry = countriesInitial
    .filter((country: ICountry) => country.cca2 === params.cca2)
    .reduce((acc, country) => {
      acc = country;
      return acc;
    }, {} as ICountry);
  return (
    <>
      {Object.keys(country).length > 0 ? (
        <>
          <section className={style.imageSection}>
            <Image
              className={style.image}
              layout="fill"
              placeholder={"blur"}
              sizes="(max-width: 768px) 100vw"
              src={`https://flagcdn.com/w1280/${country.cca2.toLowerCase()}.png`}
              blurDataURL={`https://flagcdn.com/w160/${country.cca2.toLowerCase()}.png`}
              alt={country.flags.alt}
            />
          </section>
          <section className={style.detailSection}>
            <h1>{country.name.common}</h1>
            <span>
              Population: {new Intl.NumberFormat().format(country.population)}
            </span>
            <span>Region: {country.region}</span>
          </section>
        </>
      ) : (
        <h1>404</h1>
      )}
    </>
  );
}
