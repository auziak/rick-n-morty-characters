import React, { useEffect, useState } from "react"
import Cards from "../components/Cards/Cards"
import InputGroup from "../components/Filter/components/InputGroup/InputGroup"

const Locations = () => {
  const [results, setResults] = useState([])
  const [info, setInfo] = useState([])
  const { dimension, type, name } = info
  const [number, setNumber] = useState(1)

  const api = `https://rickandmortyapi.com/api/location/${number}`

  useEffect(() => {
    ;(async function () {
      const data = await fetch(api).then(res => res.json())
      setInfo(data)

      const characters = await Promise.all(
        data.residents.map(x => {
          return fetch(x).then(res => res.json())
        })
      )
      setResults(characters)
    })()
  }, [api])

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location name : <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">Dimention: {dimension === "" ? "Unknown" : dimension}</h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">Pick Location</h4>
            <InputGroup name="Location" changeID={setNumber} total={126} />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/locations/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
