import React from "react";
import { BasicProfile } from "ts/interfaces";

import SeeShoutouts from "../see-shoutouts/see-shoutouts";
import styles from "./SearchBox.module.css";

const SearchResultBox = (userData: { data: BasicProfile }) => {
  const { data } = userData;
  return (
    <div className={styles.container}>
      <a className={styles.name}>@{data?.name}</a>
      <div className={styles.btn}>
        <SeeShoutouts employeeId={data.employeeId} />
      </div>
    </div>
  );
};

export default SearchResultBox;
