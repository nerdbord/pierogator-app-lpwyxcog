import React from 'react'
import PierogIcon from '@icons/Pierog.svg?react'
import Button from '../../../components/Button/Button'
export const NavComponent = ({ title }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 16px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <PierogIcon />
        <h2 style={{ paddingLeft: '8px' }}>{title}</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button>Generuj</Button>
      </div>
    </nav>
  )
}
