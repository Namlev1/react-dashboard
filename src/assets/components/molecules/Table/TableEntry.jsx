import styles from './Table.module.css'
import {useEffect, useRef, useState} from "react";

const TableEntry = ({ content, gridTemplateColumns, onClick }) => {
  return (
      <div className={styles['table-content']} style={{ gridTemplateColumns }} onClick={onClick}>
        {content.map((field, idx) => {
          if (idx === 0) {
            // don't render left border
            if (field.src) {
              return (
                  <div key={field.src} className={styles['center-img']}>
                    <img src={field.src} alt={field.alt} />
                  </div>
              )
            }
            return <p key={field}>{field}</p>
          }

          if (field.src) {
            return (
                <div key={field.src} className={styles['center-row']}>
                  <div
                      className={styles['center-img']}
                      style={{ borderLeft: '1px solid var(--text)' }}
                  >
                    <img src={field.src} alt={field.alt} />
                  </div>
                </div>
            )
          }
          return (
              <div key={field} className={styles.center}>
                <div>
                  <p style={{ borderLeft: '1px solid var(--text)' }}>{field}</p>
                </div>
              </div>
          )
        })}
      </div>
  )
}

export default TableEntry
