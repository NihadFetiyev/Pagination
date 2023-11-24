import React, { useEffect, useMemo, useState } from 'react'

function Praktik() {
  const [data, setdata] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [setPerPage] = useState(3)

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then(res => res.json())
      .then(items => setdata(items))
  }, [])

  const pageNumbers = []
  for (let i = 1; i < Math.ceil(data.length / setPerPage); i++) {
    pageNumbers.push(i)
  }

  const lastElement = currentPage * setPerPage
  const firstElement = lastElement - setPerPage

  const useMemory = useMemo(() => data.slice(firstElement, lastElement), [currentPage, data])
  console.log(useMemory);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>descriopotiomj</th>
          </tr>
        </thead>
        <tbody>
          {
            useMemory.map((x, y) => (
              <tr key={y}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        {
          pageNumbers.map(page => {
            <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
          })
        }
      </div>
    </>
  )
}

export default Praktik