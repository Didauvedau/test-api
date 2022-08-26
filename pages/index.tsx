import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useUser, UseUser } from '@auth0/nextjs-auth0/dist/frontend/use-user'
import Link from 'next/link'

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {user?.name}
          <a href="#"></a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          {user?.name ? (
            ''
          ) : (
            <Link href="/api/auth/login">
              <a className={styles.card}>
                <h2>Login &rarr;</h2>
                <p>Login Now !</p>
              </a>
            </Link>
          )}
          <Link href={`/profile/${user?.nickname ?? '_'}`}>
            <a className={styles.card}>
              <h2>Profile &rarr;</h2>
              <p>Profile Page !</p>
            </a>
          </Link>

          <Link href="/home">
            <a className={styles.card}>
              <h2>Home Page &rarr;</h2>
              <p>Home Page Now !</p>
            </a>
          </Link>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
