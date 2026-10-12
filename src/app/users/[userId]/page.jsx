import React from 'react'

export default async function page({ params }) {
  
  const { userId } = await (params);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();

  return (
    <div>
      {user && <div>
        <h1> {user.city }</h1>
      </div>
        
      }
    </div>
  )
}
