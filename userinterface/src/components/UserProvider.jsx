import { useEffect } from 'react';
 
function UserProvider() {
 
  const get_data = async () => {
 
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await res.json();
      console.log(result)
    }
    catch (err) {
      console.log(`Handling error!`);
      console.log(err);
    }
  };
 
  useEffect(() => {
    get_data();
  }, []);

  return(
    <>
    </>
  )
}
 
export default UserProvider;