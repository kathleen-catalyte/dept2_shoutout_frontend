import MagnifyingGlass from "heroicons/20/solid/magnifying-glass.svg";
import Image from "next/image";

import styles from "./search-box.module.css";

// setstate of input
// see previous project
// on click of x set textfield state to empty string

const SearchBox = () => {
  console.log(MagnifyingGlass);

  return (
    <div className={styles.searchWrapper}>
      <form>
        <Image
          src={MagnifyingGlass}
          alt=""
          className={styles.magnifyingGlassInactive}
        ></Image>
        <input type="text" className={styles.searchBox} />
        {/* add the magnifying icon here */}
        <button className={styles.closeIcon} type="reset" />
      </form>
    </div>
  );
};

export default SearchBox;
