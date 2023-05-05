import { useState, useEffect } from 'react'

export default function FollowMouse() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = event => {
      const { clientX, clientY } = event
      console.clear()
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) window.addEventListener('pointermove', handleMove)

    //"clean" useEffect, this will be executed whenever the component unmounts or unrender, and whenever the deps changes
    //you can fix it using getEventListeners()
    return () => {
      console.log('Cleaning events')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // window.addEventListener() <- it will be executed for each rendering
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: -20,
          left: -20,

          width: 40,
          height: 40,

          borderRadius: '50%',
          backgroundColor: '#09f',

          opacity: 0.8,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
        }}
      ></div>
      <button
        onClick={() => {
          setEnabled(!enabled)
        }}
      >
        {enabled ? 'Disabled' : 'Enabled'}
      </button>
    </>
  )
}
