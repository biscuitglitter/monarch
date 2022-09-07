import React, { useContext } from "react"
import { ViewContext } from "./context/ViewContext"

const PictureBox = () => {
  const { currentPage } = useContext(ViewContext)
  return (
    <>
      <img src={`data:image/svg+xml;base64,${btoa(currentPage.image)}`} />
      <h3>
        <i className="name">{`${currentPage.name}`}</i>
      </h3>
    </>
  )
}

export default PictureBox
