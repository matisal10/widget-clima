import React from 'react'
import styles from './loaing.module.css'

export default function loading() {
    return (
        <div className={styles.loaingContainer}>
            <div className={styles.loader}>
                <div></div>
            </div>
        </div>
    )
}
