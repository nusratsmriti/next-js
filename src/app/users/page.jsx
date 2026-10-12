import Link from 'next/link';
import React from 'react'

export default async function users() {
 
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
  
  return (
    <div className="grid grid-cols-3 m-5 gap-4">
      {users.map((user) => (
        <div key={user.id} className="card w-96 bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <div className="justify-end card-actions">
              <li>
                
                <Link className="btn bg-amber-600" href={`/users/userId`}>
                  Show Details
                </Link>
              </li>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
