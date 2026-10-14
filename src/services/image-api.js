function fetchImagesApi(query, page) {

  const KEY = '30142714-7b10e34c120f858629a98df8c';
  
    return (
          fetch(`https://pixabay.com/api/?q=${query}&image_type=photo&orientation=horizontal&page=${page}&key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нема картинок по такій назві: ${query}`));
    })
    )}

export default { fetchImagesApi };