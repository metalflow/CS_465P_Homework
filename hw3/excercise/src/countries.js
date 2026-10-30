import {getCountriesAndCapitals} from './countries_api.js';

export default function Countries() {
    try {
        const data = getCountriesAndCapitals();
    } catch (error) {
        console.log(error);
        return <h1>An error ocurred getting data</h1>;
    }
    console.log(data);
    return <h1>Countries</h1>;
}