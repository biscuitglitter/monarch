import React, {useContext, useState} from "react"
import { ViewContext } from "./context/ViewContext"

const ClickButton = (props) => {  
  const { index, setIndex, allData } = useContext(ViewContext)

  const handleClick = (e) => {
    if (index === allData.length - 1 && e.currentTarget.name === "next") return
    if (index === 0 && e.currentTarget.name === "previous") return
    e.currentTarget.name === "next" ? setIndex(index + 1) : setIndex(index - 1)
  }
  return (
    <button name={props.name} onClick={handleClick}>{props.name}</button>
  )
}

export default ClickButton