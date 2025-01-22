import React, { useState } from 'react'
import Item from './Item'

function ItemList() {
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1', link: '#', category: 'Category 1', subcategory: 'Subcategory 1' },
    { id: 2, title: 'Item 2', link: '#', category: 'Category 2', subcategory: 'Subcategory 2' },
  ])

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div>
      {items.map(item => (
        <Item
          key={item.id}
          title={item.title}
          link={item.link}
          category={item.category}
          subcategory={item.subcategory}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  )
}

export default ItemList
