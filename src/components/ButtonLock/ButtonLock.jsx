import styles from './ButtonLock.module.scss'
import React, { useState } from 'react'
import LockIcon from '@icons/Lock.svg?react'
import UnLockIcon from '@icons/UnLock.svg?react'

function ToggleButton() {
  const [isLocked, setIsLocked] = useState(true)

  const handleClick = () => {
    setIsLocked(!isLocked)
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {isLocked ? <UnLockIcon /> : <LockIcon />}
    </button>
  )
}

export default ToggleButton
