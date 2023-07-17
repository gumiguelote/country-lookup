
export const getAllCountries = async () => {
  const  res  = await fetch(`${process.env.NEXT_PUBLIC_APP_URL_API}/all?fields=name,flags,region,population,cca2`, { next: { revalidate: 10 } });
  return res.json();
}

export const getAllCca2ForSitemap = async () => {
  const  res  = await fetch(`${process.env.NEXT_PUBLIC_APP_URL_API}/all?fields=cca2`);
  return res.json();
}

