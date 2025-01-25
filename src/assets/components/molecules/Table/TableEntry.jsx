import styles from './Table.module.css'

const TableEntry = ({ content, gridTemplateColumns }) => {
  return (
    <div className={styles['table-content']} style={{ gridTemplateColumns }}>
      {content.map((field, idx) => {
        if (idx === 0) {
          return <p key={field}>{field}</p> // don't render left border
        }
        return (
          <p key={field} style={{ borderLeft: '1px solid var(--text)' }}>
            {field}
          </p>
        )
      })}
    </div>
  )
}

export default TableEntry
