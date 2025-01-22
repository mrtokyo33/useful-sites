export const getLinks = () => {
  const storedLinks = localStorage.getItem('links')
  return storedLinks ? JSON.parse(storedLinks) : []
}

export const saveLinks = (links) => {
  localStorage.setItem('links', JSON.stringify(links))
}

export const addLink = (title, link, category, subcategory) => {
  const links = getLinks()
  const newLink = { 
    id: Date.now(), 
    title, 
    link, 
    category: category || null,
    subcategory: subcategory || null
  }
  links.push(newLink)
  saveLinks(links)
}

export const deleteLink = (id) => {
  const links = getLinks()
  const updatedLinks = links.filter(link => link.id !== id)
  saveLinks(updatedLinks)
}

export const getCategories = () => {
  const storedCategories = localStorage.getItem('categories')
  return storedCategories ? JSON.parse(storedCategories) : []
}

export const saveCategories = (categories) => {
  localStorage.setItem('categories', JSON.stringify(categories))
}
