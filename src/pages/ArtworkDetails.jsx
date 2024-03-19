import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext'
import handleFetch from '../utils/handleFetch'
import ReactHtmlParser from 'react-html-parser';

const ARTWORK_URL = `https://api.artic.edu/api/v1/artworks`

const ArtworkDetails = () => {
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);
  const { artworkId } = useParams();
  const { imageBaseUrl } = useContext(DataContext)

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(`${ARTWORK_URL}/${artworkId}`)
      if (data) {
        console.log(data);
        setArtwork(data.data);
      }
      if (error) setError(error);
    };
    doFetch();
  }, [artworkId])

  console.log(artworkId);

  if (!artwork) return <p>Loading...</p>
  if (error) return <h1>Oops! Something went wrong...</h1>

  const {
    title,
    image_id,
    date_display,
    artist_display,
    artwork_type_title,
    place_of_origin,
    description,
    department_title,
    medium_display
  } = artwork;

  const descriptionParsed = ReactHtmlParser(description?.slice(3, -5) || '');

  return (
    <>
      <h1>{title}</h1>
      <div id='artwork-details-container'>
        <section className='artwork-details'>
          <h2>About the piece</h2>
          <p><b>Who:</b> {artist_display}</p>
          <p><b>When:</b> {date_display}, {artwork_type_title}</p>
          <p><b>Where:</b> {place_of_origin || <i>Origin Unknown</i>}</p>
          <p><b>Department:</b> {department_title || <i>No Department Provided</i>}</p>
          <p><b>Medium:</b> {medium_display || <i>No Medium Provided</i>}</p>
          <div className='description'><b>Description:</b> {descriptionParsed || <i>No Description Provided</i>}</div>
        </section>
        <section className='artwork-details'>
          <img alt={title} src={`${imageBaseUrl}/${image_id}/full/863,/0/default.jpg`} />
        </section>
      </div>
    </>
  )
}

export default ArtworkDetails;