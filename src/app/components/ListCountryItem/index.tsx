'use client'

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
  
  const ListCountryItem = ({country}: any) => {
    return (
      <Link href={`/country-detail/${country.code}`}> 
      <li>
        <div className='flag'>
          <Image 
            fill
            placeholder={'blur'}
            sizes='(max-width: 768px) 100vw' 
            blurDataURL={country.flags.png} 
            src={country.flags.png}
            alt={country.flags.alt} 
          />
        </div>
        <span>{country.name.common}</span>
      </li>
    </Link>
    )
  }
export default memo(ListCountryItem);