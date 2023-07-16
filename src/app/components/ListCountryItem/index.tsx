'use client'

import React, { memo } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { ICountry } from '@/app/interfaces/ICountry';
  
  const ListCountryItem = ({country}:{country: ICountry}) => {
    return (
      <li>
        <Link href={`/country-detail/${country.cca2}`}> 
          <div className='flag'>
            <Image 
              layout="fill"
              placeholder={'blur'}
              sizes='(max-width: 768px) 100vw' 
              src={country.flags.png}
              blurDataURL={country.flags.png} 
              alt={country.flags.alt} 
            />
          </div>
          <span>{country.name.common}</span>
        </Link>
      </li>
    )
  }
export default memo(ListCountryItem);