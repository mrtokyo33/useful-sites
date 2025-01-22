import React, { useState, useRef, useEffect } from 'react'
import { addLink } from '../../services/linkService'
import styles from './css/Panel.module.css'

function Panel({ event }) {
  const [warning, setWarning] = useState()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [categories, setCategories] = useState([])

  const titleRef = useRef()
  const linkRef = useRef()

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || []
    setCategories(storedCategories)
  }, [])

  const CleanInputs = () => {
    titleRef.current.value = ''
    linkRef.current.value = ''
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setSelectedSubcategory('') // Reset subcategory when category changes
  }

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value)
  }

  const addCategory = () => {
    const newCategory = prompt('Enter new category:')
    if (newCategory) {
      const newCategories = [...categories, { title: newCategory, subcategories: [] }]
      setCategories(newCategories)
      localStorage.setItem('categories', JSON.stringify(newCategories))
    }
  }

  const addSubcategory = () => {
    const newSubcategory = prompt('Enter new subcategory:')
    if (newSubcategory && selectedCategory) {
      const newCategories = categories.map(cat => {
        if (cat.title === selectedCategory) {
          return { ...cat, subcategories: [...cat.subcategories, newSubcategory] }
        }
        return cat
      })
      setCategories(newCategories)
      localStorage.setItem('categories', JSON.stringify(newCategories))
    }
  }

  const createLink = (e) => {
    e.preventDefault()

    const title = titleRef.current.value
    let link = linkRef.current.value

    if (title && link) {
      if (!link.startsWith('https://') && !link.startsWith('http://')) {
        link = 'https://' + link
      }

      addLink(title, link, selectedCategory, selectedSubcategory)
      setWarning(null)
      CleanInputs()
      window.location.reload()
    } else {
      setWarning('You must enter both the title and the link!')
    }
  }

  return (
    <div className={styles.panelContainer}>
      <div className={styles.header}>
        <h1>Create A Link</h1>
        <button type="button" className={styles.Button} onClick={event}>X</button>
      </div>

      <form onSubmit={createLink}>
        <div className={styles.fields}>
          <label htmlFor="title">Title</label>
          <input type="text" name="Title" placeholder="Title" ref={titleRef} />
        </div>

        <div className={styles.fields}>
          <label htmlFor="link">Link</label>
          <input type="text" name="Link" placeholder="Link" ref={linkRef} />
        </div>

        <div className={styles.fields}>
          <label htmlFor="category">Category</label>
          <div className={styles.categoryContainer}>
            <select name="category" value={selectedCategory} onChange={handleCategoryChange} className={styles.selectInput}>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
            <button type="button" onClick={addCategory} className={styles.addButton}>+</button>
          </div>
        </div>

        {selectedCategory && (
          <div className={styles.fields}>
            <label htmlFor="subcategory">Subcategory</label>
            <div className={styles.subcategoryContainer}>
              <select name="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange} className={styles.selectInput}>
                <option value="">Select Subcategory</option>
                {categories
                  .find(category => category.title === selectedCategory)
                  ?.subcategories.map((subcategory, index) => (
                    <option key={index} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
              </select>
              <button type="button" onClick={addSubcategory} className={styles.addButton}>+</button>
            </div>
          </div>
        )}

        <span className={styles.warning}>
          {warning}
        </span>

        <div className={styles.submitField}>
          <button type="submit" className={styles.submit}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Panel
