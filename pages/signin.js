import { useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; 

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Correct usage
      alert('Signed in successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
