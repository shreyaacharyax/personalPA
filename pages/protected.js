import { useAuth } from '/contexts/AuthContext' // Correct import

export default function ProtectedPage() {
  const { user } = useAuth()

  if (!user) {
    return <div>You need to be signed in to access this page.</div>
  }

  return <div>Welcome, {user.email}!</div>
}
