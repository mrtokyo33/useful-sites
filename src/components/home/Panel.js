import styles from './css/Panel.module.css'
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Panel({ event }) {
  const [warning, setWarning] = useState()
  const [categories] = useState([ 
    { title: 'Technology', subcategories: ['Web Development', 'AI', 'Security'] },
    { title: 'Music', subcategories: ['Rock', 'Pop', 'Classical'] },
    { title: 'Movies', subcategories: ['Action', 'Comedy', 'Drama'] },
  ])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const titleRef = useRef()
  const linkRef = useRef()

  function CleanInputs() {
    titleRef.current.value = ''
    linkRef.current.value = ''
  }

  function CreateLink(e) {
    e.preventDefault()

    const title = titleRef.current.value
    let link = linkRef.current.value

    if (title && link) {
      if (!link.startsWith('https://') && !link.startsWith('http://')) {
        link = 'https://' + link
      }

      const newLink = {
        title,
        link,
        category: selectedCategory,
        subcategory: selectedSubcategory,
      }

      const links = JSON.parse(localStorage.getItem('links')) || []
      newLink.id = uuidv4() 

      links.push(newLink)
      localStorage.setItem('links', JSON.stringify(links))

      setWarning(null)
      CleanInputs()
      event()
      window.location.reload()
    } else {
      setWarning('You must enter both the title and the link!')
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setSelectedSubcategory('')
  }

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value)
  }

  return (
    <div className={styles.panelContainer}>
      <div className={styles.header}>
        <h1>Create A Link</h1>
        <button type="button" className={styles.closeButton} onClick={event}>X</button>
      </div>

      <form onSubmit={CreateLink}>
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
          <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.title}>{category.title}</option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className={styles.fields}>
            <label htmlFor="subcategory">Subcategory</label>
            <select name="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange}>
              <option value="">Select Subcategory</option>
              {categories
                .find(category => category.title === selectedCategory)
                ?.subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>{subcategory}</option>
                ))}
            </select>
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
