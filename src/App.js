import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// components
import Cards from "./components/Cards/Cards"
import CardDetails from "./components/Cards/CardDetail/CardDetail"
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination"
import Filter from "./components/Filter/Filter"
import Navbar from "./components/Navbar/Navbar"
// pages
import { EpisodesPage } from "./Pages/Episodes/EpisodesPage"
import { LocationsPage } from "./Pages/Locations/LocationsPage"
// css
import "./App.css"

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [searchValue, setSearchValue] = useState("")
  const [fetchedData, setFetchedData] = useState({})
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const [status, setStatus] = useState("")
  const { info, results } = fetchedData

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchValue}&gender=${gender}&species=${species}&status=${status}`

  // TODO: Error handling
  useEffect(() => {
    ;(async () => {
      const res = await fetch(url)
      const data = await res.json()
      setFetchedData(data)
    })()
  }, [url])

  return (
    <>
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          <Search setSearchValue={setSearchValue} setPageNumber={setPageNumber} />
          <Filter
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
            setStatus={setStatus}
            selectedGender={gender}
            selectedSpecies={species}
            selectedStatus={status}
          />
          <div className="col-lg-9 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/:id" element={<CardDetails />} />
          <Route path="/locations/:id" element={<CardDetails />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
