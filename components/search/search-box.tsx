import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid/";

import styles from "./search-box.module.css";

// setstate of input
// see previous
// on click of x set textfield state to empty string

const SearchBox = () => {
  return (
    <div className={styles.searchWrapper}>
      <form>
        <input type="text" className={styles.searchBox} />
        <div className={styles.magnifyingGlassWrapper}>
          <MagnifyingGlassIcon className={styles.magnifyingGlassInactive} />
        </div>
        <button className={styles.closeButton} type="reset">
          <XMarkIcon className={styles.closeIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
