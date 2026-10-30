/*
{
    COUNTRIES_API_KEY='rc_live_e6f736c229ae411daf3ebc0189360a10'

  "names": { "common": "Canada", "official": "Canada", "native": { "eng": { "common": "Canada", "official": "Canada" }, "fra": { … } } },
  "codes": { "alpha_2": "CA", "alpha_3": "CAN", "ccn3": "124", "fifa": "CAN", "cioc": "CAN" },
  "capitals": [{ "name": "Ottawa", "primary": true, "coordinates": { "lat": 45.42, "lng": -75.7 } }],
  "flag": { "emoji": "🇨🇦", "url_svg": "https://flags.restcountries.com/v5/svg/ca.svg", "url_png": "https://flags.restcountries.com/v5/w640/ca.png" },
  "region": "Americas",
  "subregion": "North America",
  "area": { "kilometers": 9984670, "miles": 3855101.1 },
  "borders": ["USA"],
  "calling_codes": ["1"],
  "currencies": [{ "code": "CAD", "name": "Canadian dollar", "symbol": "$" }],
  "languages": [{ "name": "English", "bcp47": "en", … }, { "name": "French", "bcp47": "fr", … }],
  "leaders": [
    { "assets": [], "attributes": { "head_of_government": true, "head_of_state": false }, "links": { "wikipedia": "https://en.wikipedia.org/wiki/Mark_Carney" }, "name": "Mark Carney", "title": "Prime Minister" },
    { "assets": [], "attributes": { "head_of_government": false, "head_of_state": true }, "links": { "wikipedia": "https://en.wikipedia.org/wiki/Charles_III" }, "name": "Charles III", "title": "Monarch" }
  ],
  "memberships": { "un": true, "nato": true, "g7": true, "g20": true, "commonwealth": true, "oecd": true, … },
  "population": 38005238,
  "timezones": ["UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30"],
  "tlds": [".ca"],
  "uuid": "189581ed-44b0-47d7-9849-6b097401a7d6"
}
// and 51 more fields. 13 groups hidden entirely (cars, classification, continents,
// coordinates, date, demonyms, economy, government_type, landlocked, links,
// number_format, parent, postal_code) plus subfields under names, codes, flag, memberships
*/

const apiKey = process.env.COUNTRIES_API_KEY;
const baseUrl = "https://api.restcountries.com/countries/v5";

// 2. Create a URL object
const url = new URL(baseUrl);
export function getCountriesAndCapitals() {
    if (apiKey === null || apiKey === "") {
        return "Error: please configure .env file with your own API key"
    }
    const params = {
  q : "Canada"
};
Object.keys(params).forEach(key => {
  if (Array.isArray(params[key])) {
    // If it's an array, append multiple values for the same key
    params[key].forEach(value => url.searchParams.append(key, value));
  } else {
    url.searchParams.append(key, params[key]);
  }
});
    return makeAPICall(url);
}
function makeAPICall(url){
fetch(url,
  { method: "GET",headers: { 'Authorization': apiKey } }
)
  .then(function (response) { return response.json(); })
  .then(function (data) { console.log(data); });
}