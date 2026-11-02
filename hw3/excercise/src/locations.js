import { useEffect,useState  } from 'react';
import { getLocations } from "./api/rick_and_morty_api";

function MakeList(){
const [data, setData] = useState(null);
useEffect(() => {

    const loadLocationData = async () => { 
      const data = await getLocations();
      setData(data);
    };
    loadLocationData();


  }, []); // Run once on mount
  console.log(typeof data);
  console.log(data);
  if (data === null) {
    return <div>Loading data...</div>;
  } else {
    console.log(data);
    const output=[];
    const uniqueLocationTypes = [...new Set(data.map(item => item.type))];
    uniqueLocationTypes.map((locationType)=>{
        const count = data.filter(item => item.type === locationType).length;
        if (locationType!=='') {
            output.push({type : locationType,count:count})
        } else {
            output.push({type : 'Empty Type',count:count})
        }
    });
    console.log(output);
  return (
    
    <ul>
      {output.map((output,index) => (
        <li key={index}>{output.type}:{output.count}</li>
      ))}
    </ul>
  );
}
}

export default function Locations() {
   return (<>
    <h1>Locations</h1>
    <MakeList />
    </>);
}