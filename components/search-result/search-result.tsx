import { XMarkIcon } from '@heroicons/react/24/solid';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { BasicProfile } from 'ts/interfaces';

import SearchResultBox from './search-result-box';
import styles from './SearchResult.module.css';

const SearchResult = ({
  childToParent,
}: {
  childToParent: (childdata: boolean) => void;
}) => {
  const [storedSearchResults, setStoredSearchResults] = useState<
    BasicProfile[]
  >([]);

  useEffect(() => {
    const storedSearchResults = sessionStorage.getItem('profileSearchResults');
    if (storedSearchResults) {
      setStoredSearchResults(JSON.parse(storedSearchResults));
    }
  }, []);
  const ClearSearchResults = () => {
    sessionStorage.clear();
    Router.replace(
      {
        pathname: '/',
      },
      undefined,
      { shallow: true }
    );
    childToParent(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.words}>
        <a className={styles.searchResults}>Search Results</a>
        <div
          data-testid='clear'
          className={styles.clearButton}
          onClick={ClearSearchResults}
        >
          {' '}
          <XMarkIcon className={styles.xicon} />{' '}
          <a className={styles.clearWords}>Clear Results</a>
        </div>
      </div>
      {storedSearchResults &&
        storedSearchResults?.map((profile: BasicProfile, idx: React.Key) => {
          return (
            <div className={styles.searchContain} key={idx}>
              <SearchResultBox data={profile} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchResult;
