import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid/";
import { ChangeEvent, useEffect, useState } from "react";

import styles from "./search-box.module.css";

// setstate of input
// see previous
// on click of x set textfield state to empty string
/**
 * @name
 * @description
 * @returns
 */
const SearchBox = () => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  /**
   * @name
   * @description
   * @returns
   */
  const handleFocus = () => setFocused(true);

  /**
   * @name
   * @description
   * @returns
   */
  const handleBlur = () => setFocused(false);

  /**
   * @name
   * @description
   * @returns
   */
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  /**
   * @name
   * @description
   * @returns
   */
  const handleFieldClear = () => {
    setInputValue("");
  };

  return (
    <div className={styles.searchWrapper}>
      <form>
        <input
          type="text"
          className={`${styles.searchInput} ${
            inputValue !== "" && styles.searchInputWithText
          }`}
          placeholder="Search for teammates"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleFieldChange(e)}
        />
        <div className={styles.magnifyingGlassWrapper}>
          <MagnifyingGlassIcon
            className={
              focused
                ? styles.magnifyingGlassActive
                : styles.magnifyingGlassInactive
            }
          />
        </div>
        {focused || inputValue.length >= 1 ? (
          <button
            className={styles.closeButton}
            type="reset"
            onClick={() => handleFieldClear}
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default SearchBox;
