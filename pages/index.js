import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className={styles.container}>
      <h1>Shoutout!</h1>

      {user ? (
        <>
          <p>{user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </> ) : (
        <ul>
          <li><a href="/api/auth/login">Login</a></li>
        </ul>
      )}
    </div>
  )
}
