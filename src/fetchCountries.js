const BASE_URL = 'https://restcountries.com';

const fetchCountries = function (name) {
  return fetch(`${BASE_URL}/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(
    response => {
      if (response.status === 404) {
        return Promise.reject(new Error());
      }
      return response.json();
    }
  );
};

export { fetchCountries };
