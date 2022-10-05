import styles from "./search-box.module.css";

// setstate of input
// see previous project
// on click of x set textfield state to empty string

const SearchBox = () => {
  return (
    <div className={styles.searchWrapper}>
      <form>
        <input type="text" className={styles.searchBox} />
        {/* add the magnifying icon here */}
        <button className={styles.closeIcon} type="reset" />
      </form>
    </div>
  );
};

export default SearchBox;
