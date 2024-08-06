// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ArtworkList = () => {
//     const [artwork, setArtworks] = useState([]);

//     useEffect(() => {
//         axios.get('/api/artworks')
//             .then(response => setArtworks(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <div>
//             <h1>Artworks</h1>
//             <ul>
//                 {ArtworkList.map(artwork => (
//                     <li key={artwork.id}>{artwork.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ArtworkList;