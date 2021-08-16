import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { genreApi } from '../utils/greatNovels'

const GenreDetail = () => {
  let { id } = useParams();
  let [novels, setNovels] = useState([])

  useEffect(() => {
    const grabNovels = async () => {
      const novelsData = await genreApi(id)
      const justNovels = novelsData.novels
      setNovels(justNovels)
    } 
  
    grabNovels()
  }, [id])


  if(!novels){
    return (
      <div>
        Loading..
      </div>
    )
  }

  return (
    <div>
      <ul>
      {novels.map(novel => (
        <li key={novel.id}>
          {novel.title}
        </li>
      ))}
      </ul>

    </div>
  )
}

export default GenreDetail