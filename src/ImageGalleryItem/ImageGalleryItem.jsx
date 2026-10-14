import {useState} from 'react'
import {
    ItemStyled,
    ImageStyled
} from './ImageGalleryItem.styled.jsx'

import Modal from '../Modal/Modal.jsx'

function ImageGalleryItem ({image}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
  setShowModal(prevShowModal => !prevShowModal);
  }
  
    return (
      <>
    <ItemStyled >
          <ImageStyled  
          onClick={toggleModal} 
          src={image.webformatURL} 
          alt={image.tags} />
    </ItemStyled>
    {showModal && 
    <Modal onClose={toggleModal}>
      <img 
      src={image.largeImageURL} 
      alt={image.tags} />
    </Modal>}
    </>
  )
}

export default ImageGalleryItem