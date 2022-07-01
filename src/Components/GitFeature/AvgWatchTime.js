import React, {useEffect, useState} from 'react';
import {Graph} from '../Graph';
import axios from 'axios';

export const Component =() => {
  
  const token = "phx_P6emKJcwmA62aa1qBxzzLaI1T37TFNScdvoVheBpOIV";
  const [xAxis, setXAxis] = useState();
  const [series, setSeries] = useState([]);
  const [legend, setLegend] = useState([]);
  
  async function getData() {
    try {
      const response = await axios.get(`https://posthog.skara.live/api/projects/2/dashboards/7`,
          {
              "headers": {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json",
              }
          }
      );
      
      console.log("posthog response", response.data.items[11].result)
      const data = response.data.items[11].result
      setXAxis(data[0].labels)
      data.map((val)=>{
        const obj = {name: val.label, type:"line", stack:"Total",data: val.data}
        setSeries(series => [...series, obj])
        setLegend(legend => [...legend, val.label])
      })
  } catch (error) {
      console.error("error api fetch", error);
  }
}

useEffect(() => {
  getData()
}, [])

if (series === undefined){
  return(<h1>Loading</h1>)
}else{
  return (
    <>
      <div>
        <Graph  xAxis={xAxis} series={series} legend={legend} title="avg watch time" vendor="git-vercel-analytics"/>
      </div>
      </>
  )
}

}

export const AverageWatchTime = Component