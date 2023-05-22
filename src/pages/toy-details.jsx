// const { useEffect, useState } = React;
// import useEffect,useState =
// const { useParams, useNavigate, Link } = ReactRouterDOM;

// import { toyService } from '../services/toy.service.js';
// import { showErrorMsg } from '../services/event-bus.service.js';

// export function ToyDetails() {
//   const [toy, setToy] = useState(null);
//   const { toyId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadToy();
//   }, [toyId]);

//   function loadToy() {
//     toyService
//       .getById(toyId)
//       .then((toy) => setToy(toy))
//       .catch((err) => {
//         console.log('Had issues in toy details', err);
//         showErrorMsg('Cannot load toy');
//         navigate('/toy');
//       });
//   }

//   if (!toy) return <div>Loading...</div>;
//   return (
//     <section className="toy-details">
//       <h1>Toy vendor : {toy.vendor}</h1>
//       <h5>Price: ${toy.price}</h5>
//       <p>⛐</p>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo quidem,
//         placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!
//       </p>
//       <Link to={`/toy/edit/${toy._id}`}>Edit</Link>
//     </section>
//   );
// }
