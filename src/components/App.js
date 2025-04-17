// create your App component here
import React, { useState } from 'react'
import React, { useEffect } from 'react'

function App() {
    const [dogImage, setDogImage] = useState(null)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
        .then((response) => response.json())
        .then((data)=>{
            setDogImage(data.message)
            setLoading(false)
        })
    })
  return (
    <div>
        <h1>Dog image</h1>
        {loading ? (
            <p>loading...</p>
        ) : (
            <img src={dogImage} alt='A Random Dog'/>
        )}
    </div>
  )
}

export default App
