import React from 'react'
import { css, jsx } from '@emotion/react'
import { getSession, GetSession } from '@auth0/nextjs-auth0'
import AuthLink from '../AuthLink'
import Nav from '../Nav'
import { UserProps } from '../../type/user'

const HomeComponent: React.FC<UserProps> = (props) => {
  const { user } = props

  return (
    <div className="container my-3 home p-2">
      <h1 className="text-center">Home Page</h1>
      <div
        css={css`
          align-items: center;
          background: #ff00cc;
          background: -webkit-linear-gradient(to right, #333399, #ff00cc);
          background: linear-gradient(to right, #333399, #ff00cc);
          display: flex;
          height: 100vh;
          justify-content: center;
        `}
      >
        <div
          css={css`
            background: #fff;
            border-radius: 1rem;
            padding: 4rem 8rem;
            text-align: center;
          `}
        >
          <Nav user={user} />
          <h2
            css={css`
              margin: 2rem 0;
            `}
          >
            {user?.name ?? 'Welcome User'}
          </h2>
          <p
            css={css`
              margin-top: 2rem;
              margin-bottom: 3rem;
            `}
          >
            {user
              ? `It's great to have you here${user.given_name ? ` ${user.given_name}!!` : '!!'}`
              : 'I bet you would like to sign in to our app right? Click the Sign in button below'}
          </p>
          <div>
            {user ? (
              <AuthLink path="/api/auth/logout">Sign Out</AuthLink>
            ) : (
              <AuthLink path="/api/auth/login">Sign In</AuthLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const getServerSideProps = async (ctx: { req: any; res: any }) => {
  const { req, res } = ctx
  const session = getSession(req, res)

  return {
    props: { user: session?.user ?? null },
  }
}

export { getServerSideProps }

export default HomeComponent
