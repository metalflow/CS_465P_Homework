import { useEffect,useState  } from 'react';
import { getCharacters } from "./api/rick_and_morty_api";

//const hasFetched = useRef(false);

export default function Characters() {
  const [data, setData] = useState(null);
useEffect(() => {
    const loadCharacterData = async () => { 
      const data = await getCharacters();
      setData(data);
    };
    loadCharacterData();
  }, []); // Run once on mount
  console.log(data);
  return <h1>Characters</h1>;
}
