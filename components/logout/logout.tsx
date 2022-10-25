import React from "react";

import styles from "./Logout.module.css";

const Logout = () => {
  return (
    <div className={styles.logoutContainer}>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className={styles.logout} href="/api/auth/logout">
        Log Out
      </a>
    </div>
  );
};
export default Logout;
