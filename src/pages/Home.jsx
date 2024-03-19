import handleFetch from "../utils/handleFetch";
import { useState } from 'react';
import { Link } from 'react-router-dom'

const SEARCH_URL = 'https://api.artic.edu/api/v1/artworks/search';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, error] = await handleFetch(`${SEARCH_URL}?q=${searchTerm}`)
    if (data) setSearchData(data.data);
    if (error) setError(error);
  }

  return (
    <>
      <h1>Home</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-term-input">Search: </label>
          <input
            type="text"
            name="searchTerm"
            id="search-term-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </section>
      <section>
        <ul>
          {
            error ? 'oops!' :
              searchData?.map((artwork) => {
                const { id, title } = artwork;
                return (
                  <li key={id}>
                    <Link to={`/artworks/${id}`}>{title}</Link>
                  </li>
                )
              })
          }
        </ul>
      </section>
    </>
  )
}

export default Home;