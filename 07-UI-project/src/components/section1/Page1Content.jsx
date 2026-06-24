import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 flex items-center gap-10 justify-between h-[90vh] px-8 bg-amber-950'>
        <Leftcontent />
        <Rightcontent />
    </div>
  )
}

export default Page1Content
