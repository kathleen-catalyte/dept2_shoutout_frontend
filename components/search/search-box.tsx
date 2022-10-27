import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid/';
import { ChangeEvent, useRef, useState } from 'react';

import fetch from '@/lib/fetch';

import styles from './SearchBox.module.css';

const SearchBox = ({
  childToParent,
}: {
  childToParent: (childData: boolean) => void;
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  const inputExists = () => inputValue.length >= 1;
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleFieldClear = () => {
    setInputValue('');
    inputRef.current?.focus();
    sessionStorage.clear();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    childToParent(false);
    sessionStorage.removeItem('profileSearchResults');

    if (inputRef.current !== null) {
      const searchQuery: string = inputRef.current.value.trim();
      const response = await fetch(
        `api/profile/search?name=${searchQuery}&email=${searchQuery}`
      );
      router.push({
        pathname: '/',
        query: { name: searchQuery, email: searchQuery }
      },
        undefined, { shallow: true }
      )

      sessionStorage.setItem('profileSearchResults', JSON.stringify(response));
      childToParent(true);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          name='search field'
          role='text'
          type='text'
          className={`${styles.searchInput} ${
            (focused || inputExists()) && styles.searchInputWithText
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
            data-testid='search icon'
            className={
              focused || inputExists()
                ? styles.magnifyingGlassActive
                : styles.magnifyingGlassInactive
            }
          />
        </div>
        {inputExists() ? (
          <button
            name='clear search button'
            type='reset'
            role='button'
            data-testid='clear search'
            className={styles.closeButton}
            onClick={handleFieldClear}
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        ) : (
          ''
        )}
        {inputExists() ? (
          <button
            name='submit search button'
            type='submit'
            role='button'
            disabled={false}
            className={`${styles.submitButton} ${styles.submitButtonActive}`}
          >
            Search
          </button>
        ) : (
          <button
            name='submit search button'
            type='submit'
            role='button'
            disabled={true}
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
