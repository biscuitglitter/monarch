import "./styles.css"
import { useState, useEffect } from "react"
import { svgs } from "./components/data"
import ClickButton from "./components/ClickButton"
import PictureBox from "./components/PictureBox"
import HexBox from "./components/HexBox"
import Footer from "./components/Footer"
import { ViewContext } from "./components/context/ViewContext"
import _ from "lodash"

export default function App() {
  const [data, setData] = useState([])
  const [allData, setAllData] = useState([])
  const [index, setIndex] = useState(0)

  let currentPage = allData[index]

  useEffect(() => {
    setData(svgs)
    let svgArray = []
    for (let i = 0; i < data.length; i++) {
      svgArray.push({
        name: data[i].name,
        image: data[i].content,
        hexCodeArray: _.shuffle(data[i].content.match(/#[a-f0-9]{6}|#[a-f0-9]{3}/gi))      
      })
    }
    setAllData(_.shuffle(svgArray))
  }, [data])

  if (currentPage !== undefined) {
    return (
      <>
        <ViewContext.Provider value={{ setIndex, index, allData, currentPage }}>
          <PictureBox />
          <HexBox />
          <div className="btnContainer">
            <ClickButton name={"previous"} />
            <ClickButton name={"next"} />
          </div>
          <Footer />
        </ViewContext.Provider>
      </>
    )
  }
}
