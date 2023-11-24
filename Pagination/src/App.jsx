import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(3)

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories").then(res => res.json()).then(items => setData(items))
  }, [])

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(data.length/perPage); i++) {
    pageNumbers.push(i)
  }

  const lastElementIndex = currentPage * perPage
  const firstElementIndex = lastElementIndex - perPage

  const pageDatas = useMemo(()=>data.slice(firstElementIndex, lastElementIndex), [data, currentPage])
  console.log(pageDatas);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            pageDatas.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
          ))
        }
        </tbody>
      </table>
      <div>
        {
          pageNumbers.map(page=>(
            <button key={page} onClick={()=>setCurrentPage(page)}>{page}</button>
          ))
        }
      </div>
    </>
  )
}

export default App
