import React from 'react'
import {locations} from '@/constants/index'

const CityPage = () => {
  return (
    <div>
      {
        locations?.["South Africa"]["provinces"].map((l) => <p key={l.province}>{l.province}</p>)
      }
    </div>
  )
}

export default CityPage;
