import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid/';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';

import fetch from '@/lib/fetch';

import styles from './SearchBox.module.css';

/**
 * @name SearchBox
 * @description search box and search button components with handler that makes API request
 * @returns the search box component
 */
const SearchBox = () => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  /**
   * @name handleFocus
   * @description sets state of input box focus to true
   */
  const handleFocus = () => setFocused(true);

  /**
   * @name handleBlur
   * @description sets state of input box focus to false
   */
  const handleBlur = () => setFocused(false);

  /**
   * @name handleFieldChange
   * @param e change field input event
   * @description sets input value to the text a user enters
   */
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  /**
   * @name handleFieldClear
   * @description sets state of input value to an empty string and retains focus on input
   */
  const handleFieldClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  /**
   * @name handleSubmit
   * @description prevents default form submission, then makes fetch request to proxy API with search query, then passes
   * results to the results page
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      const searchQuery: string = inputRef.current.value;
      const response = await fetch(
        `api/profile/search?name=${searchQuery}&email=${searchQuery}`
      );
      localStorage.setItem('profileSearchResults', JSON.stringify(response));
      router.push('/search-results/');
    }
    // once data is stored, use router to push to search-results page (declare useRouter above)
    // on search-results map out the data
    // useRouter won't work for passing data, have to put in session data then remove from session data on the next page
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          name='search field'
          type='text'
          className={`${styles.searchInput} ${
            (focused || inputValue.length >= 1) && styles.searchInputWithText
          }`}
          placeholder='Search for teammates'
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleFieldChange(e)}
          value={inputValue}
          ref={inputRef}
        />
        <div className={styles.magnifyingGlassWrapper}>
          <MagnifyingGlassIcon
            className={
              focused || inputValue.length >= 1
                ? styles.magnifyingGlassActive
                : styles.magnifyingGlassInactive
            }
          />
        </div>
        {inputValue.length >= 1 ? (
          <button
            name='clear search button'
            type='reset'
            className={styles.closeButton}
            onClick={handleFieldClear}
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        ) : (
          ''
        )}
        {inputValue.length >= 1 ? (
          <button
            name='submit search button'
            type='submit'
            className={`${styles.submitButton} ${styles.submitButtonActive}`}
          >
            Search
          </button>
        ) : (
          <button
            name='submit search button'
            type='submit'
            disabled
            className={`${styles.submitButton} ${styles.submitButtonInactive}`}
          >
            Search
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
