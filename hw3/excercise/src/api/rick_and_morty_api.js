/*
https://rickandmortyapi.com/api
{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
*/


const baseURL = 'https://rickandmortyapi.com';


export async function getCharacters(number) {
  let url=new URL(baseURL);
  if (typeof number === 'number' && !Number.isNaN(number)) {
    const numbers = [];
for (let i = 1; i <= number; i++) {
  numbers.push(i);
}
    url.pathname = 'api/character/'+numbers;
} else {
  url.pathname='/api/character';
}
    return await makeAPIcall(url);
}

export async function getLocations() {
  let url=new URL(baseURL);
  const numbers = [];
for (let i = 1; i <= 126; i++) {
  numbers.push(i);
}
  url.pathname='/api/location/'+numbers;
    return await makeAPIcall(url);
}

async function makeAPIcall(url) {

  try {
    const response = await fetch(url);
    
    // Check if the HTTP status code is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the data as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors or issues with the response
    console.error('Fetch failed:', error.message);
    return null;
  } 
}