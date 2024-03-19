import { useEffect, useState } from 'react';
import DataContext from './DataContext';
import handleFetch from '../utils/handleFetch';

const ARTWORKS_URL = 'https://api.artic.edu/api/v1/artworks?limit=50&fields=id,image_id,title'
const IMAGE_BASE_URL = 'https://www.artic.edu/iiif/2';

const DataContextProvider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState(IMAGE_BASE_URL);
  const [error, setError] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(ARTWORKS_URL)
      console.log(data);
      if (data) {
        setArtworks(data.data.filter((artwork) => artwork.image_id));
        setImageBaseUrl(data.config.iiif_url);
      }
      if (error) setError(error);
    };
    doFetch();
  }, [])

  console.log(artworks);

  const contextValues = { imageBaseUrl, artworks, error, setArtworks, setError };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;