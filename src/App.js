import React, {useState} from 'react'
import SimpleCard from './Card/Card';
import { Grid } from '@material-ui/core';
import { datasource } from './data';
import { useEffect } from 'react';

const App = () => {
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
  }, [])
  
  return (
    <div style={{margin: '25px'}}>
      <h3 style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      Service Application
      </h3>
      <Grid container spacing={3}>
        {
          data.map((o, i) => <Grid item xs={4}>
            <SimpleCard 
            key={i}
            id={o.ID}
            name={o.Name}
            email={o.Email}
            desc={o.Description}
            refresh={refresh}
          />
          </Grid>)
        }
      </Grid>
    </div>
  )
}

export default App
