/*
https://rickandmortyapi.com/api
{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
*/


const baseURL = 'https://rickandmortyapi.com/api';


export async function getCharacters() {
    const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
    const url = new URL(baseURL+'/character/'+numbers);
    return await makeAPIcall(url);
}

export function getLocations() {
    return null;
}

export function getSpecies() {
    return null;
}

async function makeAPIcall(url,) {

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