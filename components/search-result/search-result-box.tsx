import React from 'react'
import { BasicProfile } from 'ts/interfaces'

import styles from './SearchBox.module.css'

const SearchResultBox = (prop: any) => {
    const { data } = prop
    console.log(data)
    return (
        <div className={styles.container}>
            <a className={styles.name}>@{data?.name}</a>
        </div>
    )
}

export default SearchResultBox