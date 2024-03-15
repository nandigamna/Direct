import Newscontent from './Newscontent';
import React, { useEffect } from 'react'

const Newscomponent = ({setProgress }) => {

  useEffect(() => {
    setProgress(50);
    setTimeout(() => { setProgress(100) }, 2000);
  }, [setProgress])




  return (
    <div className='mt-3 ms-3'>
      <h3>THIS HEADLINE</h3>
      <Newscontent />
    </div>
  )
}

export default Newscomponent