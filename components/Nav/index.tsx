import React from 'react'
import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import { UserProps } from '../../type/user'

const linkItem = css`
  margin: 0 2rem;
`
const link = css`
  color: #ff00cc;
  padding: 0.5rem 1rem;
`

const Nav: React.FC<UserProps> = (props) => {
  const { user } = props
  return (
    <div className="container">
      <nav>
        <ul
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
          `}
        >
          <li>
            <Link href="/">
              <a css={link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/profile/${user?.nickname ?? '_'}`}>
              <a css={link}>Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
