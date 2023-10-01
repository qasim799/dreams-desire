import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {
  const [Page, setPage] = useState(1);
  const [Search, setSearch] = useState("teen")
  const [response, setResponse] = useState([])
  const url = `https://www.eporner.com/api/v2/video/search/?query=${Search}&per_page=20&page=${Page}&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`;

  useEffect(() => {
    const initial = async() =>{
      try {
        
        const response = axios.get(url).then((res) => setResponse(res.data.videos))
      } catch (error) {
        console.log(error)
      }
    }

    initial()
  }, [Page])

  const handleSubmit = () => {
    try {
      const response = axios.get(url).then((res) => setResponse(res.data.videos))

    } catch (error) {
      console.log(error)
    }
  }

  const nextPage= () => {
  setPage((prev) => prev+1)
  }

  const previousPage = () => {
    setPage((prev)=>prev-1)
  }
  return (
    <>
    <h1 className=' text-5xl font-bold text-center mt-10'>Jawad ka Kotha</h1>
    <div className=' w-screen justify-center items-center flex gap-2 mt-10 mb-10'>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSubmit}	 className='btn btn-secondary'>
        Submit Search
      </button>
    <button className=' btn btn-primary' onClick={nextPage}>Next</button>
    <button className=' btn btn-primary' onClick={previousPage}> previous</button>
    </div>
  <div className=' flex w-screen h-screen items-center justify-center flex-wrap'>
        {
          response.map((res,index) => (
            <div key={index}>
              <div className=' flex flex-col gap-4'>
                <p>{res.title}</p>
              <iframe allowFullScreen  width={800} height={360} src={res.embed} ></iframe>
              </ div>
            </div>
          ))
        }

        </div>
        </>
  )
}

export default Home