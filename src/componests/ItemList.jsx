import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({ title, items, itemArray, path, idPath }) => {
  console.log(title)
  const { pathname } = useLocation()
  const isHome = pathname === "/"
  let finalItems;
  isHome ? finalItems = items : finalItems = Infinity;

  return (
    <div className="iten-list">
      <div className="item-list__header">
        <h3>{title} Populares</h3>
        {isHome ? ( <Link to={path}>Mostrar tudo</Link>) : (<></>)}

      </div>
      <div className='item-list__container'>
        {itemArray.filter((currentValue, index) => index < finalItems)
          .map((currentObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currentObj}
              key={`${index}-${title} `} />
          ))}
      </div>
    </div>
  )
}
export default ItemList