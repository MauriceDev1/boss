import southAfricaProvinces from '@/data/rsa';
import React from 'react'

const Province = () => {

  return (
    <div>
        {southAfricaProvinces.length > 0
          ?
            (
              <>
                {southAfricaProvinces.map(p => (
                  <div key={p.province}>
                    {p.province}
                  </div>
                ))}
              </>
            )
          :
            (
              <p>There is no data available</p>
            )
        }
    </div>
  )
}

export default Province;
