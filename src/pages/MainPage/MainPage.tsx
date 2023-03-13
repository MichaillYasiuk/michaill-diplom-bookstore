import React, { useEffect, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { CountryList } from '../../components/CountryList/CountryList';
import { ROUTE } from '../../router/routes';

export const MainPage = () => {
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then(setCountries);
  }, []);
  return (
    <main>
      <h1>MainPage</h1>
      <CountryList countries={countries} />
    </main>
  );
};
{
  /*  */
}
