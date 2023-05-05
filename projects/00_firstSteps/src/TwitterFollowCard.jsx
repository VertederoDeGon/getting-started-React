import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const showIsFollowing = isFollowing ? 'Following' : 'Follow'
  const handleFollow = () => setIsFollowing(!isFollowing)
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  console.log('[TwitterFollowCard] render with userName: ', userName)

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={userName}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-info-userName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleFollow}>
          <span className="tw-followCard-text">{showIsFollowing}</span>
          <span className="tw-followCard-stopFollow">Stop following</span>
        </button>
      </aside>
    </article>
  )
}
