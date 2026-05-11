import axios from 'axios'
import { useState } from 'react'

interface PicsumImage {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

const App = () => {
  // const getData = async
  //  () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()

  //   console.log(data)
  // }

  const getData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    console.log(response)
  }

  const [data, setData] = useState<PicsumImage[]>([])

  const getApi = async () => {
    const rspns = await axios.get<PicsumImage[]>(
      'https://picsum.photos/v2/list'
    )
    setData(rspns.data)
    console.log(rspns.data)
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="mb-4 space-x-4">
        <button
          onClick={getData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Fetch Users Data
        </button>
        <button
          onClick={getApi}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Fetch Images
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={elem.download_url}
                alt={elem.author}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-lg">Author: {elem.author}</p>
                <p className="text-sm text-gray-600">ID: {elem.id}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
