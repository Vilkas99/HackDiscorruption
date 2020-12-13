import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">Equipo Objection</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Realizado para</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">#Discorruption</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
