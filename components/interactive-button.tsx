'use client'

import React from 'react'

export function InteractiveButton() {
  return (
    <button onClick={() => alert('button clicked!')}>
      Click me!
    </button>
  )
}
