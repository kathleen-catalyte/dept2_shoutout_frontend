import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { BasicProfile } from "ts/interfaces";

import SeeShoutouts from "../see-shoutouts";
import styles from "./SearchResultsList.module.css";

const SearchResultsList: NextPage = () => {
  const [storedSearchResults, setStoredSearchResults] = useState<
    BasicProfile[]
  >([]);

  useEffect(() => {
    const storedSearchResults = sessionStorage.getItem("profileSearchResults");
    if (storedSearchResults) {
      setStoredSearchResults(JSON.parse(storedSearchResults));
    }
  }, []);

  return (
    <div>
      {storedSearchResults.length > 0 ? (
        <p className={styles.searchResultsMsg}>Search Results:</p>
      ) : (
        <p className={styles.searchResultsMsg}>
          Your search does not match any profiles.
        </p>
      )}
      {storedSearchResults &&
        storedSearchResults.map((profile: BasicProfile) => (
          <>
            <SeeShoutouts employeeId={profile.employeeId} />
            <ul key={profile.employeeId} className={styles.searchResultsList}>
              <li key={profile.email}>Email: {profile.email}</li>
              <li key={profile.team}>Team: {profile.team}</li>
              <li key={profile.country}>Country: {profile.country}</li>
              <li key={profile.name}>Name: {profile.name}</li>
              <li key={profile.image72}>Image72: {profile.image72}</li>
              <li key={profile.image192}>Image192: {profile.image192}</li>
              <li key={profile.image512}>Image512: {profile.image512}</li>
              <li key={profile.employeeId}>
                Employee Id: {profile.employeeId}
              </li>
            </ul>
          </>
        ))}
    </div>
  );
};

export default SearchResultsList;
