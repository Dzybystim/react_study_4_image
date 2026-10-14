import {useState} from 'react'

import {
    SearchbarStyled
} from './Searchbar.styled.jsx'
function Searchbar ({handleSubmit}) {
    
const [query, setQuery] = useState('');

const handleSubmitForm = evt => {
  evt.preventDefault();

  if(query.trim() === '') {
    alert('Please enter a search query.');
    return;
  }
  
  handleSubmit(query);
  setQuery('');
};

    return (
            <SearchbarStyled>
                <form className="form" onSubmit={handleSubmitForm}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        onChange={(evt) => setQuery(evt.target.value)}
                        value={query}
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </SearchbarStyled>
        )
    }

export default Searchbar