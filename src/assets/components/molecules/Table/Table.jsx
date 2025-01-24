import styles from './Table.module.css'
import React from 'react'

// { ratio } is n-n-n format. Like 3-1 or 4-4-3
const Table = ({ ratio, children }) => {
  const gridTemplateColumns = ratio
    .split('-')
    .map((value) => `${value}fr`) // Convert each value to a fraction (e.g., ['3fr', '1fr'])
    .join(' ')

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      gridTemplateColumns
    })
  })
  return <div className={styles.table}>{childrenWithProps}</div>
}

export default Table
