import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid/';
import { ChangeEvent, useRef, useState } from 'react';

import fetch from '@/lib/fetch';

import styles from './search-box.module.css';

/**
 * @name SearchBox
 * @description search box and search button components
 * @returns
 */
const SearchBox = () => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * @name handleFocus
   * @description sets state of input box focus to true
   */
  const handleFocus = () => setFocused(true);

  /**
   * @name handleBlur
   * @description sets state of input box to false
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
   * @description sets state of input value to an empty string
   */
  const handleFieldClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  /**
   *
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      const searchQuery: string = inputRef.current.value;
      const response = await fetch(
        `api/profile/search?name=${searchQuery}&email=${searchQuery}`
      );
      console.log(response);
    }
    // make fetch request to proxy api get data and error (don't think I can use SWR for this)
    // store data
    // once data is stored, use router to push to search-results page (declare useRouter above)
    // on search-results map out the data
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
