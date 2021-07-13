import React, {useState} from 'react'
import SimpleCard from './Card/Card';
import { Grid } from '@material-ui/core';
import { datasource } from './data';
import { useEffect } from 'react';

const App = () => {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(datasource);
  const local = () => {
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
  }

  const refresh = (updatedData) => {
    setData(updatedData)
    localStorage.setItem('data', JSON.stringify(updatedData));
  }
  
  useEffect(() => {
    local();
  }, [update])
  
  return (
    <div>
      <Grid container spacing={3}>
        {
          data.map((o, i) => <Grid item xs={4}>
            <SimpleCard 
            id={o.ID}
            name={o.Name}
            email={o.Email}
            desc={o.Description}
            update={update}
            refresh={refresh}

          />
          </Grid>)
        }
      </Grid>
    </div>
  )
}

export default App
