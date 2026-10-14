import {useState} from 'react'

import {
    AppStyled
} from './App.styled.jsx'

import Searchbar from '../Searchbar/Searchbar.jsx'
import ImageGallery from '../ImageGallery/ImageGallery.jsx'

function App () {

  const [query, setQuery] = useState('');

  const handleSubmit = query => { 
    setQuery(query);
  };



  return (
    <>
      <AppStyled>
        <Searchbar 
        handleSubmit={handleSubmit}/>
        <ImageGallery 
        query={query} />
      </AppStyled>
    </>
  );
 }

export default App
