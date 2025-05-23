// import React, { useEffect, useState } from 'react';
// import axios from 'axios';// the main use of axios is to send http request
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';

// const ShowBook = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     console.log('Book ID:', id); // Check if the ID is being fetched correctly
//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/books/${id}`)
//       .then((response) => {
//         setBook(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container py-4">
//       <BackButton />
//       <h1 className="h3 my-4">Show Book</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="card border-primary p-4">
//           <div className="mb-3">
//             <span className="fw-bold text-primary">Id:</span> 
//             <span>{book._id}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold text-primary">Title:</span> 
//             <span>{book.title}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold text-primary">Author:</span> 
//             <span>{book.author}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold text-primary">Publish Year:</span> 
//             <span>{book.publishYear}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold text-primary">Create Time:</span>
//             <span>{new Date(book.createdAt).toString()}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold text-primary">Last Update Time:</span> 
//             <span>{new Date(book.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowBook;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log('Book ID:', id);
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log('Book data received:', response.data); // Debug log
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container py-4">
      <BackButton />
      <h1 className="h3 my-4">Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="card border-primary p-4">
          <div className="mb-3">
            <span className="fw-bold text-primary">Id:</span>
            <span> {book._id || 'N/A'}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold text-primary">Title:</span>
            <span> {book.title || 'N/A'}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold text-primary">Author:</span>
            <span> {book.author || 'N/A'}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold text-primary">Publish Year:</span>
            <span> {book.publishYear || 'N/A'}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold text-primary">Create Time:</span>
            <span>
              {' '}
              {book.createdAt ? new Date(book.createdAt).toLocaleString() : 'N/A'}
            </span>
          </div>
          <div className="mb-3">
            <span className="fw-bold text-primary">Last Update Time:</span>
            <span>
              {' '}
              {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : 'N/A'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
