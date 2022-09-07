import React, { useContext } from "react"
import { ViewContext } from "./context/ViewContext"

const HexBox = () => {
  const { currentPage } = useContext(ViewContext)

  // const rgb2hex = (rgb) =>
  // `#${rgb
  //   .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  //   .slice(1)
  //   .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
  //   .join("")}`

  return (
    <>
      <div className="hexContainer">
        {[...new Set(currentPage.hexCodeArray)].slice(0, 6).map((hex, key) => (
          <div
            key={key}
            className="hex"
            style={{ backgroundColor: `${hex}` }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default HexBox
