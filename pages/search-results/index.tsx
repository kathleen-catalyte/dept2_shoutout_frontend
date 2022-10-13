import type { NextPage } from 'next';

import SearchResultsList from '@/components/search/search-results-list';

//on submit search, send search query to this page
//pass query as string to fetch request
//map out users as an unstyled list

const SearchResults: NextPage = () => {

  return (
    <div>
      <p>Search results:</p>
      <SearchResultsList />
    </div>
  );
};

export default SearchResults;
