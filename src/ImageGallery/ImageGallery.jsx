
import {useState, useEffect} from 'react';
import {
    ImageGalleryStyled,
    LoaderWrapper,
    LoaderContainer
} from './ImageGallery.styled.jsx'

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx'
import Button from '../Button/Button.jsx'
import api from '../services/image-api.js'

function ImageGallery ({query}) {

  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const fetchImages = (pageNumber) => {

  if (query.trim() === '') {
    setImages(null);
    setStatus('idle');
    return;
  }

  setStatus('pending');

  if (pageNumber === 1) {
    setImages([]);
  }

    api.fetchImagesApi(query, pageNumber)
    .then(data => {
      if (data.hits.length === 0) {
        alert('Нема зображень для запиту: ' + query);
        setStatus('idle');
        setImages(null);
        return;
      }
      setStatus('resolved');
      setImages(prevImages => pageNumber === 1 ? data.hits : [...prevImages, ...data.hits]);
    })
    .catch(error => {
      setError(error.message);
      setStatus('rejected');
    })
  };

  useEffect(() => {
    fetchImages(page);
  }, [page])

  useEffect(() => {
    if (query.trim() !== '') {
      fetchImages(1);
    }
  }, [query])

const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(page)
  };

  if (status === 'idle') {
    return <p>Введіть запит для пошуку зображень</p>;
  }

  if (status === 'pending') {
    return (
    <LoaderContainer>
        <LoaderWrapper/>
    </LoaderContainer>
    )
  }

  if (status === 'rejected') {
    return <p>{error}</p>;
  }

  if (status === 'resolved') {
    return (    
    <>
      <ImageGalleryStyled>
        {images && images.map((image, index) => (
            <ImageGalleryItem 
            key={`${image.id}-${index}`} 
            image={image} />
        ))}
      </ImageGalleryStyled>
        <Button onClick={handleLoadMore} />   
    </>   
    )}
}

export default ImageGallery