import React from 'react'
import { css, jsx } from '@emotion/react'
import { type } from 'os'

const AuthLinkStyles = css`
  background-color: #ff00cc;
  border: 1px solid #ff00cc;
  border-radius: 0.5rem;
  color: #fff;
  display: block;
  margin: auto;
  padding: 1rem 2rem;
  width: max-content;
`
export type Props = {
  children: string
  path: string
}

const AuthLink: React.FC<Props> = (props) => {
  const { children, path } = props
  return (
    <div className="container">
      <a css={AuthLinkStyles} href={path}>
        {children}
      </a>
    </div>
  )
}

export default AuthLink
