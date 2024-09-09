// pages/protected.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedPage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>You need to sign in to access this page.</p>;
  }

  return <div>Welcome, {user.email}!</div>;
}
