import React from 'react'

export const getFocusText = (text, pattern, focusClass) => {
  const reg = new RegExp(`${pattern}`)
  const patternPosition = reg.exec(text).index

  return <>{text.substring(0, patternPosition)}<b className={focusClass}>{text.substring(patternPosition, patternPosition + pattern.length)}</b>{text.substring(patternPosition + pattern.length, text.length)}</>
}
