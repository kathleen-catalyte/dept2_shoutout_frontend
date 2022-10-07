import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid/";
import { ChangeEvent, useEffect, useState } from "react";

import styles from "./search-box.module.css";

/**
 * @name SearchBox
 * @description search box and search button components
 * @returns
 */
const SearchBox = () => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
    setInputValue("");
  };

  return (
    <div className={styles.searchWrapper}>
      <form>
        <input
          name="search field"
          type="text"
          required
          className={`${styles.searchInput} ${
            (focused || inputValue.length >= 1) && styles.searchInputWithText
          }`}
          placeholder="Search for teammates"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleFieldChange(e)}
          value={inputValue}
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
        {focused || inputValue.length >= 1 ? (
          <button
            name="clear search button"
            type="reset"
            className={styles.closeButton}
            onClick={handleFieldClear}
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        ) : (
          ""
        )}
        <button
          name="submit search button"
          type="submit"
          className={styles.submitButton}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
