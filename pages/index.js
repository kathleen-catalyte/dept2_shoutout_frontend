import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.toString()}</div>

  return (
    <div className={styles.container}>
      <h1>Shoutout!</h1>

      {user ? (
        <>
          <p>{user.email}</p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/logout">Logout</a>
        </> ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/login">Login</a>
        </>
      )}
    </div>
  )
}
