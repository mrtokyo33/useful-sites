import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Item from '../components/home/Item'
import AddButton from '../components/home/AddButton'
import styles from './css/Home.module.css'

function Home() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links')) || []
    setLinks(storedLinks)
  }, [])

  const handleAddLink = (newLink) => {
    if (!newLink.title || !newLink.link || !newLink.category || !newLink.subcategory) {
      alert('Please fill in all fields.')
      return
    }
    const linkWithId = { ...newLink, id: uuidv4() }
    const updatedLinks = [...links, linkWithId]
    setLinks(updatedLinks)
    localStorage.setItem('links', JSON.stringify(updatedLinks))
  }

  const handleDelete = (id) => {
    const updatedLinks = links.filter(link => link.id !== id)
    setLinks(updatedLinks)
    localStorage.setItem('links', JSON.stringify(updatedLinks))
  }

  return (
    <div className={styles.Home}>
      <main>
        {links.map((link) => (
          <Item
            key={link.id}
            id={link.id}
            title={link.title}
            link={link.link}
            category={link.category}
            subcategory={link.subcategory}
            onDelete={() => handleDelete(link.id)} 
          />
        ))}
      </main>
      <AddButton onAdd={handleAddLink} />
    </div>
  )
}

export default Home
