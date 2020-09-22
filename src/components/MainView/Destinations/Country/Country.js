import React from 'react';
import * as s from "./Country.styles";

const Country = props => {
  const country = props.match.params.country;
  const countries = {
    canada: {
      img: '/images/countries/canada.png',
      description: 'Canada is chilly'
    },
    brazil: {
      img: '/images/countries/brazil.jpg',
      description: 'Brazil is sunny'
    },
    australia: {
      img: '/images/countries/australia.jpg',
      description: 'Australia is boring'
    },
    india: {
      img: '/images/countries/india.jpg',
      description: 'India is awesome'
    },
    moldova: {
      img: '/images/countries/moldova.jpeg',
      description: 'Moldova is beautiful'
    },
    kenya: {
      img: '/images/countries/kenya.jpg',
      description: 'Kenya is breathtaking'
    }
  }

  return (
    <s.CountryContainer>
      <s.CountryImage img={countries[country]['img']} />
      <s.CountryDescription>{countries[country]['description']}</s.CountryDescription>
    </s.CountryContainer>
  )
}

export default Country