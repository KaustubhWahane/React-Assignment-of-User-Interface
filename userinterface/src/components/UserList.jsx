import React from 'react';
import '../App.css';

export default function UserList({ user_data  }) {
//   const [all_data , setAll_data] = useState([]);

// const data = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const result = await res.json();
//     setAll_data(result);
//     console.log(result)
// }
// useEffect(() => {
//     data();
//   }, []);

  return (
    <div>
      <ul className='displayData'>
        {user_data.map((item) => (
          <button key={item.id}>{item.name}</button>
        ))}
      </ul>
    </div>
  );
}
