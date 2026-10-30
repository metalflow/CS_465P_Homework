import {getCountriesAndCapitals} from './countries_api.js';

export default function Countries() {
    console.log(getCountriesAndCapitals())
    return <h1>Countries</h1>;
}