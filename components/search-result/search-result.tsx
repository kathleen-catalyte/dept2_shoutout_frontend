import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { BasicProfile } from 'ts/interfaces'

import SearchResultBox from './search-result-box'
import styles from './SearchBoxContainer.module.css'

const SearchResult = ({ childToParent }: any) => {
    const [storedSearchResults, setStoredSearchResults] = useState<BasicProfile[]>([]);

    useEffect(() => {
        const storedSearchResults = sessionStorage.getItem('profileSearchResults');
        if (storedSearchResults) {
            setStoredSearchResults(JSON.parse(storedSearchResults));
        }
    }, [])
    const ClearSearchResults = () => {
        sessionStorage.clear()
        childToParent(false)
    }
    return (
        <div className={styles.container}>
            <div className={styles.words}>
                <a className={styles.searchresults}>
                    Search Results
                </a>
                <div className={styles.clearButton} onClick={ClearSearchResults}> <XMarkIcon className={styles.xicon} /> <a>Clear Results</a></div>
            </div>
            {storedSearchResults && storedSearchResults?.map((profile: BasicProfile, idx: React.Key) => {
                return (
                    <div className={styles.searchcontain} key={idx}>
                        <SearchResultBox data={profile} />
                    </div>)
            })}
        </div>
    )
}


export default SearchResult