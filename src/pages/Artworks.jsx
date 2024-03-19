import { useContext } from 'react';
import DataContext from '../context/DataContext';
import ArtworkCard from '../components/ArtworkCard';

const Artworks = () => {
  const { artworks } = useContext(DataContext);

  return (
    <>
      <h1>All Artwork</h1>
      <section>
        <ul id='artworks-list'>
          {
            artworks.map((artwork) => {
              return (
                <li key={artwork.id}>
                  <ArtworkCard artwork={artwork} />
                </li>
              )
            })
          }
        </ul>
      </section>
    </>
  )
}

export default Artworks;