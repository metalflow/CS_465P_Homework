import { useEffect,useState  } from 'react';
import { getCharacters } from "./api/rick_and_morty_api";

//const hasFetched = useRef(false);

function MakeList(){
const [data, setData] = useState(null);
useEffect(() => {

    const loadCharacterData = async () => { 
      const data = await getCharacters(100);
      setData(data);
    };
    loadCharacterData();


  }, []); // Run once on mount
 
  if (data === null) {
    return <div>Loading data...</div>;
  } else {
  return (
    
    <ul>
      {data.map((data) => (
        <li key={data.id}><img src={data.image}/>{data.name},{data.species},{data.status}</li>
      ))}
    </ul>
  );
}
}

export default function Characters() {
  


  return (<>
    <h1>Characters</h1>
    <MakeList />
    </>
  );
}
