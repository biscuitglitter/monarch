import React, { useContext } from "react"
import { ViewContext } from "./context/ViewContext"

const Footer = () => {
  const { allData, index } = useContext(ViewContext)
  return (
    <>
  <i className="pagination"> Page {index + 1} of {allData.length}</i>
    </>
  )
}

export default Footer
