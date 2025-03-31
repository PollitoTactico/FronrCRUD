'use client';
import React from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  numeroTelefono: string;
  cumpleaños: string;
  isActive: boolean;
}

const UserTable = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://localhost:7481/api/Users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b">ID</th>
            <th className="px-6 py-3 border-b">First Name</th>
            <th className="px-6 py-3 border-b">Last Name</th>
            <th className="px-6 py-3 border-b">Email</th>
            <th className="px-6 py-3 border-b">Phone</th>
            <th className="px-6 py-3 border-b">Birthday</th>
            <th className="px-6 py-3 border-b">Status</th>
            <th className="px-6 py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 border-b">{user.id}</td>
              <td className="px-6 py-4 border-b">{user.firstName}</td>
              <td className="px-6 py-4 border-b">{user.lastName}</td>
              <td className="px-6 py-4 border-b">{user.email}</td>
              <td className="px-6 py-4 border-b">{user.numeroTelefono}</td>
              <td className="px-6 py-4 border-b">{new Date(user.cumpleaños).toLocaleDateString()}</td>
              <td className="px-6 py-4 border-b">{user.isActive ? 'Active' : 'Inactive'}</td>
              <td className="px-6 py-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;