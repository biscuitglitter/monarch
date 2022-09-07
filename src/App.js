import "./styles.css";
import { useState, useEffect } from "react"
import {svgs} from "./components/svgdata"
import ClickButton from "./components/ClickButton"
import { ViewContext } from "./components/context/ViewContext"
import _ from "lodash"

export default function App() {
const [data, setData] = useState([])
const [allData, setAllData] = useState([])
const [index, setIndex] = useState(0)

let currentPage = (allData[index])

useEffect(() => {
  setData(svgs)
  let svgArray = []
  for (let i = 0; i < data.length; i++) {
    svgArray.push({
      name: data[i].name,
      image: data[i].content,
      hexCode: _.shuffle(data[i].content.match(/#[a-f0-9]{6}|#[a-f0-9]{3}/gi))
    })
  }
  setAllData(_.shuffle(svgArray))
}, [data])

if (currentPage !== undefined) {
return (
  <>
  <ViewContext.Provider value={{ setIndex, index, allData }}>    
  <img src={`data:image/svg+xml;base64,${btoa(currentPage.image)}`}  />
  <h3><i className="name">{`${currentPage.name}`}</i></h3>
  <div className="hexContainer">
  {[...new Set(currentPage.hexCode)].slice(0,6).map((hex, key) => (
    <div key={key} className="hex" style={{backgroundColor: `${hex}`}}>
    </div>
  ))}
  </div>  
  <div className="buttonContainer">
    <ClickButton name={"previous"} />
    <h4> Page {index + 1} of {allData.length}</h4>
    <ClickButton name={"next"} />
  </div>
  </ViewContext.Provider>
  </>
);
}
}
