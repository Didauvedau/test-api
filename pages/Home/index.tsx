import React from 'react'
import HomeComponent from '../../components/HomeComponent'
import { useUser } from '@auth0/nextjs-auth0'

const Home: React.FC = () => {
  const { user, error, isLoading } = useUser()
  console.log(user)

  return (
    <div className="container">
      <HomeComponent
        user={{
          name: user?.name,
          nickname: user?.nickname,
          given_name: '',
          family_name: '',
          favoriteFood: 'user?.favoriteFood',
          picture: '' && user?.picture,
        }}
      />
    </div>
  )
}

export default Home
