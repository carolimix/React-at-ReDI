import React, { useEffect } from "react";
import { useState } from "react";



const dataFetching = () => {
const [albums, setAlbums] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)


const fetchAlbums = async () => {
        try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    console.log('response:', response)

    if (!response.ok) {
        setIsError(true)
        throw new Error('...something very bad happened...')
    }
    const data = await response.json()
    setAlbums(data)
    setIsError(false)
    console.log('data;', data)
        } catch(error) {
            setIsError(true)
            console.log('error inside catch block', error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchAlbums()
    }, [])

  return (
    <div>
      <h1>Fetching Albums</h1>
 {albums && albums.map((album) => {
    return <h1 key={album.id}>{album.title}</h1>
})
}{isLoading && <h1>...Loading...</h1>}
{isError && <h1>...Something went wrong...</h1>}
    </div>
  )
}

export default dataFetching
