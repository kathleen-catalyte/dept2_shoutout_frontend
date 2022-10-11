import type { NextPage } from 'next';
import { Shoutout } from 'src/ts/interfaces/shoutout';
import useSWR from 'swr';

//on submit search, send search query to this page
//pass query as string to fetch request
//map out users as an unstyled list

const SearchResults: NextPage = () => {
  const { data, error } = useSWR('/api/shoutouts/latest', fetch);
  const shoutOutData = data;

  if (error) return <p>Something went wrong.</p>;
  if (!data) return <p>Hang tight...</p>;
  console.log(data);
  return (
    <div>
      <p>Search results:</p>
    </div>
  );
};

export default SearchResults;
