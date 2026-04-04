import { useState, useEffect } from 'react'

const FEED_ID = import.meta.env.VITE_BEHOLD_FEED_ID

export function useInstagramFeed() {
  const [posts,   setPosts]   = useState([])
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    if (!FEED_ID) {
      setError('no_token')
      setLoading(false)
      return
    }

    fetch(`https://feeds.behold.so/${FEED_ID}`)
      .then(r => {
        if (!r.ok) throw new Error(`Behold responded with ${r.status}`)
        return r.json()
      })
      .then(data => {
        setPosts(data.posts ?? [])
        setProfile({
          followersCount: data.followersCount,
          followsCount:   data.followsCount,
          profilePictureUrl: data.profilePictureUrl,
        })
      })
      .catch(err  => setError(err.message))
      .finally(()  => setLoading(false))
  }, [])

  return { posts, profile, loading, error }
}
