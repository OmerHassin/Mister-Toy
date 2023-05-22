// const { useEffect, useState } = React;
// const { useParams, useNavigate, Link } = ReactRouterDOM;

// import { userService } from '../services/user.service.js';
// import { showErrorMsg } from '../services/event-bus.service.js';

// export function UserDetails() {
//   const [user, setUser] = useState(null);
//   const { userId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadUser();
//   }, [userId]);

//   const loggedinUser = userService.getLoggedinUser();
//   const isMyProfile = loggedinUser._id === userId;

//   function loadUser() {
//     userService
//       .getById(userId)
//       .then((user) => setUser(user))
//       .catch((err) => {
//         console.log('Had issues in user details', err);
//         showErrorMsg('Cannot load user');
//         navigate('/');
//       });
//   }

//   if (!user) return <div>Loading...</div>;
//   return (
//     <section className="user-details">
//       <h1>Fullname: {user.fullname}</h1>
//       <h5>Score: {user.score}</h5>
//       {isMyProfile && (
//         <section className="my-stuff">
//           <h2>My Stuff!</h2>
//         </section>
//       )}
//       <p>@</p>
//       <p>
//         User is so lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo
//         quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!
//       </p>
//       <Link to="/">Home</Link>
//     </section>
//   );
// }
