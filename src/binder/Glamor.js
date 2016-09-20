import React from 'react'
import { animate } from 'keyshond'
import { keyframes, style } from 'glamor'

export const GlamorSample = ({label, keyframeInput, keyframeOption}) => {
  const anim = animate(keyframeInput, keyframeOption, {
    generateAnimationName: (timeline) => keyframes(timeline)
  })
  return <div {...style(anim)}>
    {label}
  </div>
}

