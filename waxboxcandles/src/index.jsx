import React, {useState} from 'react'
import ReactDom from 'react-dom'

import Construction from './components/construction'

import './styles.css'
import {appConfig} from  './config.json'

const App = () => 
{
  const [status, setConstruction] = useState(appConfig.status);

  let setHtml;
  if(status === "DEV")
  {
    setHtml = <Construction />
  }
  else
  {
    setHtml = <h1>App Live</h1>
  }

  return(
    <div>
       {setHtml}
    </div>
  )
} 


ReactDom.render(
    <App />,
    document.getElementById('root')
)