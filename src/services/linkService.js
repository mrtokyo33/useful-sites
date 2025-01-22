export const getLinks = () => {
    const storedLinks = localStorage.getItem('links')
    return storedLinks ? JSON.parse(storedLinks) : []
  }
  
  export const saveLinks = (links) => {
    localStorage.setItem('links', JSON.stringify(links))
  }
  
  export const addLink = (title, link, category, subcategory) => {
    const links = getLinks()
    const newLink = { title, link, category, subcategory }
    links.push(newLink)
    saveLinks(links)
  }
  