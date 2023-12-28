import React, { useState } from 'react'
import Arrow from '@icons/Arrow.svg?react'
import styles from './AccordionItem.module.scss'

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleAccordion = () => {
    setIsActive(!isActive)
  }
  console.log(content)
  return (
    // <div className={styles.container}>
    //   <div className={styles.header} onClick={toggleAccordion}>
    //     <span>{title}:</span>
    //     <span className={isActive ? styles.arrowDown : ''}>
    //       <Arrow />
    //     </span>
    //   </div>
    //   {isActive &&
    //     sections.map((section, index) => (
    //       <div key={index} className={styles.section}>
    //         {section}
    //       </div>
    //     ))}
    // </div>
    <li className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  )
}
export default AccordionItem
