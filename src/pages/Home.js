import React, { useState, useEffect } from 'react'
import AddButton from '../components/home/AddButton'
import Item from '../components/home/Item'
import styles from './css/Home.module.css'

function Home() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links')) || []
    setLinks(storedLinks)
  }, [])

  const handleAddLink = (newLink) => {
    if (!newLink.title || !newLink.link) {
      alert('Please fill in all fields')
      return
    }

    const updatedLinks = [...links, newLink]
    localStorage.setItem('links', JSON.stringify(updatedLinks))
    setLinks(updatedLinks)
  }

  const handleDelete = (id) => {
    localStorage.removeItem(id)

    const updatedLinks = links.filter(link => link.id !== id)
    localStorage.setItem('links', JSON.stringify(updatedLinks))
    setLinks(updatedLinks)
  }

  const handleDeleteCategory = (category) => {
    const linksToDelete = links.filter(link => link.category === category)

    linksToDelete.forEach(link => handleDelete(link.id))

    const updatedLinks = links.filter(link => link.category !== category)
    localStorage.setItem('links', JSON.stringify(updatedLinks))
    setLinks(updatedLinks)

    const categories = JSON.parse(localStorage.getItem('categories')) || []
    const updatedCategories = categories.filter(cat => cat.title !== category)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
  }

  const handleDeleteSubCategory = (subcategory) => {
    const linksWithoutSubcategory = links.filter(link => link.subcategory !== subcategory)
  
    links
      .filter(link => link.subcategory === subcategory)
      .forEach(link => handleDelete(link.id))
  
    localStorage.setItem('links', JSON.stringify(linksWithoutSubcategory))
  
    const categories = JSON.parse(localStorage.getItem('categories')) || []
  
    categories.forEach(category => {
      if (category.subcategories && category.subcategories.includes(subcategory)) {
        category.subcategories = category.subcategories.filter(subcat => subcat !== subcategory)
      }
    })
  
    localStorage.setItem('categories', JSON.stringify(categories))
  
    setLinks(linksWithoutSubcategory)
  }

  const categorizedLinks = links.reduce((acc, link) => {
    const category = link.category || 'uncategorized'
    const subcategory = link.subcategory || 'uncategorized'

    if (!acc[category]) acc[category] = {}
    if (!acc[category][subcategory]) acc[category][subcategory] = []
    acc[category][subcategory].push(link)

    return acc
  }, {})

  return (
    <div className={styles.Home}>
      <main>
        {categorizedLinks['uncategorized'] && categorizedLinks['uncategorized']['uncategorized'] && (
          <ul>
            {categorizedLinks['uncategorized']['uncategorized'].map(link => (
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
          </ul>
        )}
        {Object.keys(categorizedLinks).map(category => (
          category !== 'uncategorized' && (
            <div key={category}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryText}>
                  <h2>{category}</h2>
                </div>
                <button className={styles.deleteCategoryButton} onClick={() => handleDeleteCategory(category)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
              <div>
                {Object.keys(categorizedLinks[category]).map(subcategory => (
                  <div key={subcategory}>
                    {subcategory !== 'uncategorized' && (
                      <div className={styles.subcategoryHeader}>
                        <h3>{subcategory}</h3>
                        <button className={styles.deleteCategoryButton} onClick={() => handleDeleteSubCategory(subcategory)}>
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    )}
                    <ul>
                      {categorizedLinks[category][subcategory].map(link => (
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
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </main>
      <AddButton onAdd={handleAddLink} />
    </div>
  )
}

export default Home
