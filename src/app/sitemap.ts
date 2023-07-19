import { MetadataRoute } from 'next'
import { getAllCca2ForSitemap } from './service/api.service'

interface ICountryCca2Code {
  cca2: string;
}

interface ISitemap {
  url: string;
  lastModified?: string | Date;
}

function returnSitemapObject(countryCode: ICountryCca2Code): ISitemap {
  return {
    url: `${process.env.APP_URL}/country-detail/${countryCode.cca2}`,
    lastModified: new Date().toISOString()
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapUrls: ISitemap[] = [];
  const arrayOfCca2 = await getAllCca2ForSitemap();
  
  arrayOfCca2.map((cca2Obj: ICountryCca2Code) => {
    sitemapUrls.push(returnSitemapObject(cca2Obj))
  })
  
  return sitemapUrls;
} 