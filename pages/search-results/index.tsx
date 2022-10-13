import type { NextPage } from 'next';
import useSWR from 'swr';
import { BasicProfile, Shoutout } from 'ts/interfaces';

//on submit search, send search query to this page
//pass query as string to fetch request
//map out users as an unstyled list

const SearchResults: NextPage = () => {
  const storedSearchResults = localStorage.getItem('profileSearchResults');
  const profileSearchResults: BasicProfile[] = storedSearchResults && JSON.parse(storedSearchResults);



  return (
    <div>
      <p>Search results:</p>

      {profileSearchResults && profileSearchResults.map((profile: BasicProfile) => (
      <ul key={profile.employeeId}>
        <li key={profile.employeeId}>Employee Id: {profile.employeeId}</li>
          <li key={profile.email}>Email: {profile.email}</li>
          <li key={profile.team}>Team: {profile.team}</li>
          <li key={profile.country}>Country: {profile.country}</li>
          <li key={profile.name}>Name: {profile.name}</li>
          <li key={profile.image72}>Image72: {profile.image72}</li>
          <li key={profile.image192}>Image192: {profile.image192}</li>
          <li key={profile.image512}>Image512: {profile.image512}</li>
        </ul>
      ))}
    </div>
  );
};

export default SearchResults;
