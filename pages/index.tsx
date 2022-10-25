import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { BasicProfile } from "ts/interfaces";

import Logout from "@/components/logout/logout";
import SearchBox from "@/components/search/search-box";
import SearchResult from "@/components/search-result/search-result";
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
  const [session, setSessionStorage] = useState<BasicProfile[]>([]);
  const [data, setData] = useState(false)
  const childToParent = (childdata: boolean) => {
    setData(childdata);
    if (sessionStorage.getItem('profileSearchResults')) {
      const storage = sessionStorage.getItem('profileSearchResults')
      if (storage) {
        setSessionStorage(JSON.parse(storage))
      }
    }
  }
  useEffect(() => {
    if (sessionStorage.getItem('profileSearchResults')) {
      setData(true)
    }
  }, [])


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
            <SearchBox childToParent={childToParent} />
          </div>
          {data ?
            <SearchResult childToParent={childToParent} /> : <Shoutouts />}

          <Logout />
        </>
      ) : (
        <>
          <div className={styles.loginContainer}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className={styles.login} href="/api/auth/login">
              Log In
            </a>
          </div>
        </>
      )}
      {/*remove following SearchBox */}
    </div>
  );
};

export default Home;
