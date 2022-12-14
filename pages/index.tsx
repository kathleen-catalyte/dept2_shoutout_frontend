import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";

import SearchBox from "@/components/search/search-box";
import Shoutouts from "@/components/shoutouts";
// import ShoutoutsTemp from '@/components/shoutouts-temp'
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  {
    isLoading && <p>Loading login info...</p>;
  }
  {
    error && <div>{error.toString()}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <h1 className={styles.title}>Shoutouts</h1>
      <p className={styles.subheader}>
        Keeping track of DEPT&#174;&#39;s shoutouts
      </p>
      {user ? (
        <>
          <div className={styles.searchContainer}>
            <SearchBox />
          </div>
          <Shoutouts />

          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className={styles.logout} href="/api/auth/logout">
            Logout
          </a>
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/login">Login</a>
        </>
      )}
      {/*remove following SearchBox */}
    </div>
  );
};

export default Home;
