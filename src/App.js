import { useEffect, useState } from 'react';
import Solution from './Questions/clickblock/solution';

function App() {

  const [data, setdata] = useState([{ click: false, id: 1 }, { click: false, id: 2 },
  { click: false, id: 3 }, { click: false, id: 4 }, { click: false, id: 5 },
  { click: false, id: 6 }, { click: false, id: 7 }, { click: false, id: 8 }, { click: false, id: 9 }])
  const [newset, setnewset] = useState([])


  useEffect(() => {

    if (newset.length == 9) {
      let i = 0;
      setInterval(() => {
        if (i < 9) {
          let dd = newset[i];
          dd.click = false
          setnewset((prevstate) => [...prevstate, dd]
          )
          i++;

        }

      }, 1000)
    }

  }, [newset])


  const setclickHandler = (id) => {
    id.click = true;
    setnewset((prevstate) => [...prevstate, id]
    );

  }

  return( <>
  <Solution/>
  </>
  )
}

export default App;
