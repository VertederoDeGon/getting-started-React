import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const [childComp, setChildComp] = useState(0)
  const following = (isFollowing = true) => isFollowing
  const fTwitter = userName => `@${userName}`
  const ch = <strong>Children Element</strong>

  const user = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: false
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: true
    }
  ]

  return (
    <section className='App'>
      {user.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
      <button
        onClick={() => {
          setChildComp(childComp + 1)
        }}
      >
        Render all the childs components
      </button>
    </section>
  )
}
