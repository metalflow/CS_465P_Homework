import { useEffect, useState } from "react";
import { getCharacters } from "./api/rick_and_morty_api";

function MakeList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadCharacterData = async () => {
      const data = await getCharacters(826);
      setData(data);
    };
    loadCharacterData();
  }, []); // Run once on mount

  if (data === null) {
    return <div>Loading data...</div>;
  } else {
    const output = [];
    const uniqueSpecies = [...new Set(data.map((item) => item.species))];

    uniqueSpecies.map((speciesName, index) => {
      const list = data.filter((item) => item.species === speciesName);
      output.push({
        species: speciesName,
        count: list.length,
        names: list.map((item) => item.name).join(", "),
      });
    });
    console.log(output);
    return (
      <ul>
        {output.map((output, index) => (
          <li key={index}>
            {output.species}:{output.count}
            <p>{output.names}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default function Species() {
  return (
    <>
      <h1>Species</h1>
      <MakeList />
    </>
  );
}
