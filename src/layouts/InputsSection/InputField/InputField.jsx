import React from 'react'
import styles from './InputField.module.scss'
import Input from '../../../components/Input/Input'

export const InputField = ({ inputTitle }) => {
 
  return (
    <div className={styles.container}>
      <h3>{inputTitle}</h3>
      <Input />
    </div>
  )
}
