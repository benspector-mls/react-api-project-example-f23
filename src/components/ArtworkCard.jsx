import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom'

const ArtworkCard = ({ artwork }) => {
  const { imageBaseUrl } = useContext(DataContext);
  return (
    <div className='artwork card'>
      <h2 className='artwork-title'>{artwork.title}</h2>
      <Link to={`/artworks/${artwork.id}`}>
        <img
          alt={artwork.title}
          src={`${imageBaseUrl}/${artwork.image_id}/full/600,/0/default.jpg`}
        />
      </Link>
    </div>
  )
}

export default ArtworkCard